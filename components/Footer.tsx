"use client";

import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream-100/80 border-t border-cream-300 py-12 text-charcoal-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cream-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sage-600 text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
              L
            </div>
            <div>
              <div className="font-serif text-base font-bold text-charcoal-900">
                lazymomguide<span className="text-sage-600">.com</span>
              </div>
              <div className="text-[11px] text-charcoal-500">
                Household sanity, rotating family meals & chore autonomy
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-600">
            <a href="#calculator" className="hover:text-sage-700 transition-colors">
              Cost Calculator
            </a>
            <a href="#meal-preview" className="hover:text-sage-700 transition-colors">
              4-Week Meal Menu
            </a>
            <a href="#pricing" className="hover:text-sage-700 transition-colors">
              Pricing Options
            </a>
            <a
              href="mailto:support@weselldigital.com"
              className="hover:text-sage-700 transition-colors"
            >
              Customer Support
            </a>
          </div>
        </div>

        {/* Mandatory Legal & Billing Disclosure */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-charcoal-500">
          <p>
            &copy; 2026 lazymomguide.com &bull; All rights reserved. Billing and technical fulfillment provided by{" "}
            <a
              href="https://tridentwebsitedesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-700 font-semibold hover:underline"
            >
              Trident Website Design
            </a>
            .
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>A Trident Digital Network Property</span>
            <span>&bull;</span>
            <a
              href="https://weselldigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-700 font-semibold hover:underline"
            >
              weselldigital.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
