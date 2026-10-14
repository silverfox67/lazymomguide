"use client";

import React from "react";
import { CheckCircle2, Clock, ShoppingBag, Sparkles, ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-cream-50 via-cream-100/60 to-cream-50 border-b border-cream-200">
      {/* Subtle organic background blur accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sage-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Pill callout */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/80 border border-cream-300 text-charcoal-700 shadow-sm mb-6 backdrop-blur-sm">
          <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" />
          <span>Designed for real homes with zero extra brain power</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.15] mb-6">
          The 5:00 PM Dinner Panic{" "}
          <span className="italic font-normal text-sage-600 block sm:inline">
            Ends Tonight.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-charcoal-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          A pre-planned 4-week rotating family dinner menu, automated aisle-by-aisle grocery checklists, and a frictionless household operating routine that runs on autopilot.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-sage-600 hover:bg-sage-700 text-white shadow-lg shadow-sage-600/20 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Claim Your Household System</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold bg-white hover:bg-cream-100 text-charcoal-800 border border-cream-300 shadow-sm transition-all"
          >
            Calculate Your Time & Food Savings
          </a>
        </div>

        {/* Value Proof Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 border-t border-cream-200">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-charcoal-700 bg-white/60 p-2.5 rounded-lg border border-cream-200">
            <Clock className="w-4 h-4 text-sage-600 shrink-0" />
            <span>15-Minute Easy Prep</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-charcoal-700 bg-white/60 p-2.5 rounded-lg border border-cream-200">
            <ShoppingBag className="w-4 h-4 text-sage-600 shrink-0" />
            <span>5 Ingredients or Less</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-charcoal-700 bg-white/60 p-2.5 rounded-lg border border-cream-200">
            <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
            <span>Printable & Notion Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
