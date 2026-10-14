// ==============================================================================
// lazymomguide.com // Cloudflare Pages Edge Function: Stripe Webhook & Fulfillment
// Path: /api/webhook
// Runs on Cloudflare's global edge network with zero cold start
// ==============================================================================

interface Env {
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  BREVO_API_KEY?: string;
  BREVO_SENDER_EMAIL?: string;
  BREVO_SENDER_NAME?: string;
  BREVO_BUYER_TAG?: string;
  DIGITAL_PRODUCTS_BUCKET?: string;
  SPOKE_DOMAIN?: string;
  PRODUCT_SLUG?: string;
  PARENT_HUB_URL?: string;
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  const jsonResponse = (data: Record<string, unknown>, status = 200) => {
    return new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  };

  try {
    const rawBody = await request.text();

    if (!rawBody) {
      return jsonResponse({ error: "Empty request body" }, 400);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let event: any;
    try {
      event = JSON.parse(rawBody);
    } catch {
      return jsonResponse({ error: "Malformed JSON payload" }, 400);
    }

    // Process checkout completion
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerEmail =
        session.customer_details?.email || session.customer_email;
      const customerName = session.customer_details?.name || "Friend";

      if (!customerEmail) {
        console.error("[Webhook Edge] Missing customer email:", session.id);
        return jsonResponse({ error: "Missing customer email" }, 400);
      }

      // Determine product slug based on session metadata or amount
      let productSlug = session.metadata?.product_slug || env.PRODUCT_SLUG;
      const amountCents = session.amount_total || 1400;

      if (!productSlug) {
        if (amountCents >= 2500) {
          productSlug = "lazymom-operating-dashboard";
        } else {
          productSlug = "lazymom-meal-pack";
        }
      }

      const spokeDomain =
        session.metadata?.spoke_domain ||
        env.SPOKE_DOMAIN ||
        "lazymomguide.com";

      const paymentIntentId =
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : session.payment_intent?.id || null;

      console.log(`[Webhook Edge] Fulfilled order: ${customerEmail} | ${spokeDomain} | ${productSlug}`);

      const supabaseUrl =
        env.NEXT_PUBLIC_SUPABASE_URL ||
        "https://xzwacojnaiohlomiutvc.supabase.co";
      const supabaseKey =
        env.SUPABASE_SERVICE_ROLE_KEY ||
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        "";
      const candidateBuckets = [
        env.DIGITAL_PRODUCTS_BUCKET,
        "digital-products",
        "digital-vault",
      ].filter(Boolean) as string[];

      // File path candidates depending on product purchased
      const candidatePaths: string[] =
        productSlug === "lazymom-operating-dashboard"
          ? [
              "kits/lazymom-operating-dashboard.zip",
              "lazymom/lazymom-operating-dashboard.zip",
              "lazymom-operating-dashboard.zip",
            ]
          : [
              "kits/lazymom-meal-pack.pdf",
              "lazymom/lazymom-meal-pack.pdf",
              "lazymom-meal-pack.pdf",
            ];

      const productTitle =
        productSlug === "lazymom-operating-dashboard"
          ? "The Complete Household Operating System (Meal Vault + Chore Grid + Command Center)"
          : "The 4-Week Done-For-You Dinner & Grocery Rotation";

      const brevoTag = env.BREVO_BUYER_TAG || "lazymom-buyer";

      // 1. Record order in Supabase via REST API (with resilient digital fallbacks)
      try {
        await fetch(`${supabaseUrl}/rest/v1/orders`, {
          method: "POST",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            Prefer: "resolution=merge-duplicates",
          },
          body: JSON.stringify({
            stripe_session_id: session.id,
            stripe_payment_intent: paymentIntentId,
            customer_email: customerEmail,
            customer_name: customerName,
            product_slug: productSlug,
            spoke_domain: spokeDomain,
            amount_cents: amountCents,
            shipping_address: "Digital Delivery - N/A",
            items: [{ slug: productSlug, title: productTitle, amount_cents: amountCents }],
            status: "completed",
            brevo_status: "pending",
          }),
        });
      } catch (err) {
        console.warn("[Webhook Edge] Supabase record error:", err);
      }

      // 2. Generate signed download URL from Supabase Storage (24-hour validity)
      let downloadLink = `https://${spokeDomain}/download-fallback?session_id=${session.id}`;
      let signedSuccess = false;

      for (const bucket of candidateBuckets) {
        if (signedSuccess) break;
        for (const path of candidatePaths) {
          try {
            const signRes = await fetch(
              `${supabaseUrl}/storage/v1/object/sign/${bucket}/${path}`,
              {
                method: "POST",
                headers: {
                  apikey: supabaseKey,
                  Authorization: `Bearer ${supabaseKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ expiresIn: 86400 }),
              }
            );
            if (signRes.ok) {
              const signData = (await signRes.json()) as { signedURL?: string };
              if (signData.signedURL) {
                downloadLink = `${supabaseUrl}/storage/v1${signData.signedURL}`;
                signedSuccess = true;
                console.log(`[Webhook Edge] Signed URL successfully created for bucket: ${bucket}, path: ${path}`);
                break;
              }
            }
          } catch (err) {
            console.warn(`[Webhook Edge] Sign attempt failed for ${bucket}/${path}:`, err);
          }
        }
      }

      // 3. Dispatch transactional fulfillment email via Brevo REST API
      const brevoApiKey = env.BREVO_API_KEY || "";
      if (brevoApiKey && !brevoApiKey.includes("your_brevo_api_key")) {
        const senderEmail = env.BREVO_SENDER_EMAIL || "support@weselldigital.com";
        const senderName = env.BREVO_SENDER_NAME || "Lazy Mom Guide Fulfillment";

        const htmlContent = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2C312E;">
  <div style="max-width:560px;margin:30px auto;background:#FFFFFF;border:1px solid #EAE5D9;border-radius:16px;padding:36px;box-shadow:0 4px 20px rgba(0,0,0,0.04);">
    <div style="font-size:12px;color:#55845E;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:12px;">
      🌿 ${spokeDomain} // DIGITAL FULFILLMENT
    </div>
    <h1 style="color:#1A1D1B;font-size:24px;margin:0 0 16px 0;font-weight:700;line-height:1.3;">Your Household Sanity System is Here!</h1>
    <p style="color:#515A56;font-size:15px;line-height:1.6;">Hi ${customerName},</p>
    <p style="color:#515A56;font-size:15px;line-height:1.6;">Thank you so much! Your digital access to <strong>${productTitle}</strong> is ready. Dinner chaos and household mental clutter officially stop today.</p>
    <div style="text-align:center;margin:28px 0;">
      <a href="${downloadLink}" style="background:#55845E;color:#FFFFFF;font-weight:700;text-decoration:none;padding:16px 32px;border-radius:10px;display:inline-block;font-size:15px;box-shadow:0 4px 12px rgba(85,132,94,0.25);">
        Download Your Digital Toolkit &rarr;
      </a>
    </div>
    <div style="background:#F2F6F3;border-radius:10px;padding:16px;margin:24px 0;font-size:13px;color:#324E38;line-height:1.5;">
      💡 <strong>Quick Start Tip:</strong> Print Week 1's grocery list or save it to your phone right now. You won't have to wonder "What's for dinner?" all week long.
    </div>
    <p style="color:#8D9693;font-size:12px;margin-top:24px;">
      SECURITY NOTICE: This cryptographically signed download link remains active for 24 hours. Keep your downloads saved to your device or cloud drive.
    </p>
    <div style="border-top:1px solid #EAE5D9;padding-top:18px;margin-top:28px;font-size:12px;color:#8D9693;">
      &copy; 2026 lazymomguide.com &bull; All rights reserved.<br/>
      Billing and technical fulfillment provided by Trident Website Design.
    </div>
  </div>
</body>
</html>`;

        try {
          await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "api-key": brevoApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sender: { name: senderName, email: senderEmail },
              to: [{ email: customerEmail, name: customerName }],
              subject: `Instant Download: ${productTitle} [${spokeDomain}]`,
              htmlContent,
            }),
          });

          // Tag contact in Brevo
          await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
              "api-key": brevoApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: customerEmail,
              attributes: {
                SPOKE_TAG: brevoTag,
                LAST_SPOKE: spokeDomain,
              },
              updateEnabled: true,
            }),
          });
        } catch (err) {
          console.warn("[Webhook Edge] Brevo dispatch exception:", err);
        }
      }

      return jsonResponse({
        received: true,
        order_id: session.id,
        status: "fulfilled",
      });
    }

    return jsonResponse({ received: true, event_type: event.type });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Edge webhook failure";
    console.error("[Webhook Edge] Error:", msg);
    return jsonResponse({ error: msg }, 500);
  }
};
