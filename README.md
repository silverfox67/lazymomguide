# lazymomguide.com // Spoke 2: Trident Digital Ecosystem

> **Automated 4-Week Rotating Family Dinners & Household Operating System**  
> Built for zero 5:00 PM dinner panic, low-energy chore autonomy, and grocery food waste elimination.  
> Anchored by **weselldigital.com** • Operated by **Trident Website Design**.

---

## 1. Product Matrix & Deliverables

| Tier | Product Slug | Title | Price | Deliverable Storage Path |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | `lazymom-meal-pack` | The 4-Week "Done-For-You" Dinner & Grocery Rotation | $14.00 | `digital-products/kits/lazymom-meal-pack.pdf` |
| **Tier 2** | `lazymom-operating-dashboard` | The Complete Household Operating System | $27.00 | `digital-products/kits/lazymom-operating-dashboard.zip` |

---

## 2. Technical Architecture

* **Frontend:** Next.js 15 (Clean static export `output: "export"`) with Tailwind CSS.
* **Hosting:** Cloudflare Pages with edge function execution at `functions/api/webhook.ts`.
* **Database:** Shared central Supabase database (`xzwacojnaiohlomiutvc`) logging to `public.products` and `public.orders`.
* **Delivery Engine:** Private Supabase Storage bucket (`digital-products`) with 24-hour cryptographically signed download tokens.
* **Transactional Email:** Brevo REST API dispatch with contact tagging (`lazymom-buyer`).
* **Compliance:** Statement descriptor notice: `TRIDENT* LAZYMOM`.

---

## 3. Environment Variables Reference

```ini
NEXT_PUBLIC_SUPABASE_URL=https://xzwacojnaiohlomiutvc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
DIGITAL_PRODUCTS_BUCKET=digital-products

STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_TIER1_LINK=https://buy.stripe.com/5kQ7sN63S6OL8Cc5NBgnK03
NEXT_PUBLIC_STRIPE_TIER2_LINK=https://buy.stripe.com/6oUaEZ9g47SPg4E7VJgnK04

BREVO_API_KEY=xkeysib-...
BREVO_SENDER_EMAIL=support@weselldigital.com
BREVO_SENDER_NAME=Lazy Mom Guide Fulfillment
BREVO_BUYER_TAG=lazymom-buyer

NEXT_PUBLIC_APP_URL=https://lazymomguide.com
PARENT_HUB_URL=https://weselldigital.com
SPOKE_DOMAIN=lazymomguide.com
PRODUCT_SLUG=lazymom-meal-pack
```

---

&copy; 2026 lazymomguide.com &bull; A Trident Website Design Network Property.
