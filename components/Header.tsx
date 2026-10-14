"use client";

import React from "react";
import { Sparkles, CalendarCheck, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-sage-500 text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:bg-sage-600 transition-colors">
            L
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-charcoal-900 group-hover:text-sage-700 transition-colors">
              lazymomguide<span className="text-sage-500">.com</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold -mt-1">
              Family Household Systems
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal-600">
          <a href="#calculator" className="hover:text-sage-600 transition-colors">
            Stress & Cost Calculator
          </a>
          <a href="#meal-preview" className="hover:text-sage-600 transition-colors">
            4-Week Menu
          </a>
          <a href="#operating-system" className="hover:text-sage-600 transition-colors">
            Household System
          </a>
          <a href="#pricing" className="hover:text-sage-600 transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-200">
            <Sparkles className="w-3.5 h-3.5 text-sage-600" />
            Zero 5 PM Panic
          </span>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
          >
            Get the Kit &rarr;
          </a>
        </div>
      </div>
    </header>
  );
}
