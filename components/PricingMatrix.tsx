"use client";

import React from "react";
import { Check, Sparkles, ShieldCheck, ArrowRight, HeartHandshake } from "lucide-react";

export default function PricingMatrix() {
  const tier1Link =
    process.env.NEXT_PUBLIC_STRIPE_TIER1_LINK ||
    "https://buy.stripe.com/test_lazymom_tier1";

  const tier2Link =
    process.env.NEXT_PUBLIC_STRIPE_TIER2_LINK ||
    "https://buy.stripe.com/test_lazymom_tier2";

  return (
    <section id="pricing" className="py-16 md:py-24 bg-cream-50 border-b border-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-200 mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Simple One-Time Pricing • Zero Subscriptions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
            Reclaim Your Evenings & Sanity
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Choose the meal rotation alone, or unlock the full household operating dashboard. One-time payment, lifetime updates, and instant download to your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Tier 1: $14 Meal Pack */}
          <div className="bg-white rounded-3xl p-8 border border-cream-300 shadow-sm flex flex-col justify-between hover:border-cream-400 transition-all">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cream-100 text-charcoal-700 border border-cream-200 mb-4">
                Core Meal System
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
                4-Week Dinner Rotation
              </h3>
              <p className="text-xs text-charcoal-500 mb-6">
                Everything you need to eliminate 5 PM dinner panic and grocery waste forever.
              </p>

              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-cream-200">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-900">
                  $14
                </span>
                <span className="text-xs text-charcoal-400 font-medium">One-time payment</span>
              </div>

              <ul className="space-y-3.5 text-sm text-charcoal-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>Full 4-Week Rotating Dinner System</strong> (28 family-approved meals)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>Aisle-Categorized Grocery Lists</strong> (print or use on your phone)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>15-Minute Prep Guides</strong> & one-pan cleanup cheatsheets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>Picky-Eater Substitution Deck</strong> (quick modifications)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span>Instant PDF download + lifetime version updates</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={tier1Link}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-white hover:bg-cream-100 text-charcoal-900 border-2 border-charcoal-900 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Get 4-Week Meal Pack ($14)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Mandatory Compliance Statement Notice */}
              <p className="text-[11px] text-center text-charcoal-500 font-mono mt-3">
                Instant digital delivery &bull; Statement will reflect TRIDENT* LAZYMOM
              </p>
            </div>
          </div>

          {/* Tier 2: $27 Complete Household System (Featured) */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-sage-500 shadow-xl flex flex-col justify-between">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sage-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Most Popular • Full System
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sage-50 text-sage-800 border border-sage-200 mb-4 mt-1">
                The Complete Household System
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
                Household Operating System
              </h3>
              <p className="text-xs text-charcoal-500 mb-6">
                Total home sanity: rotating dinner system + chore grids + family command board.
              </p>

              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-cream-200">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-sage-700">
                  $27
                </span>
                <span className="text-xs text-charcoal-400 font-medium line-through mr-1">$68</span>
                <span className="text-xs font-bold text-terracotta-600 bg-terracotta-50 px-2 py-0.5 rounded">Save 60%</span>
              </div>

              <ul className="space-y-3.5 text-sm text-charcoal-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>Everything in Tier 1</strong> (Complete 4-Week Rotating Dinner System)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>The Family Command Center</strong> (Notion template + printable boards)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>Age-Graded Chore Rotation Grid</strong> (no more repeating yourself)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>15-Minute Daily Zone Reset Loop</strong> (low-energy tidy matrix)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span><strong>12 Emergency "Pantry Zero" Meals</strong> (avoid $60 takeout nights)</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={tier2Link}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-sage-600 hover:bg-sage-700 text-white shadow-lg shadow-sage-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Complete Operating System ($27)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Mandatory Compliance Statement Notice */}
              <p className="text-[11px] text-center text-charcoal-500 font-mono mt-3">
                Instant digital delivery &bull; Statement will reflect TRIDENT* LAZYMOM
              </p>
            </div>
          </div>
        </div>

        {/* 30-Day Guarantee Box */}
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl p-6 border border-cream-300 text-center flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-charcoal-900">
              30-Day Household Sanity Guarantee
            </h4>
            <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
              If this system does not save you at least 10 hours of mental stress and twice its cost on your first two grocery runs, just email us at support@weselldigital.com for a full, prompt refund. Zero hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
