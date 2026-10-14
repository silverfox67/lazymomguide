"use client";

import React from "react";
import { LayoutDashboard, CheckSquare, Sparkles, FolderDown, Smartphone, Printer, Flame } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="operating-system" className="py-16 md:py-24 bg-white border-b border-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-terracotta-100 text-terracotta-800 border border-terracotta-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tier 2 Expanded System ($27)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
            The Complete Household Operating System
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Dinner is only half the battle. When the rest of the house feels out of control, you still go to bed exhausted. The Household Operating System puts your entire home on peaceful autopilot.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 hover:border-sage-400 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center mb-4">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              1. The Family Command Center
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
              Available as a one-click Notion template or high-res printable wall planner. Houses appointments, recurring school deadlines, emergency contacts, and the week's meal schedule in one shared spot.
            </p>
            <div className="text-xs font-semibold text-sage-700 flex items-center gap-1.5">
              <span>✓ Includes Notion template & printable PDF</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 hover:border-sage-400 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center mb-4">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              2. Nag-Free Chore Rotation Grid
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
              Age-appropriate chore matrices (Ages 4–7, 8–11, 12+) with visual cards. Kids clearly see what they need to do before screens unlock—no repeating yourself 10 times.
            </p>
            <div className="text-xs font-semibold text-terracotta-700 flex items-center gap-1.5">
              <span>✓ Daily & weekend routine checklists</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 hover:border-sage-400 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              3. The 15-Minute Zone Reset Loop
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
              Stop spending your entire Saturday cleaning. A low-energy rotating matrix where you touch one zone per day for 15 minutes, keeping the house perpetually tidy without burnout.
            </p>
            <div className="text-xs font-semibold text-sage-700 flex items-center gap-1.5">
              <span>✓ Low-energy protocol for exhausted days</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 hover:border-sage-400 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center mb-4">
              <FolderDown className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              4. Emergency "Pantry Zero" Meals
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
              12 emergency dinners made entirely from shelf-stable ingredients (canned beans, pasta, marinara, frozen veg, eggs). For the nights you didn’t shop and refuse to spend $60 on DoorDash.
            </p>
            <div className="text-xs font-semibold text-terracotta-700 flex items-center gap-1.5">
              <span>✓ Saves $50+ on every avoided takeout night</span>
            </div>
          </div>
        </div>

        {/* Compatibility Bar */}
        <div className="bg-cream-100/70 border border-cream-300 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-cream-200 flex items-center justify-center text-charcoal-700 shrink-0">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-charcoal-900 text-sm">
                100% Flexible Delivery Formats
              </div>
              <div className="text-xs text-charcoal-500">
                Use digital on iPad/Phone, duplicate to Notion, or print at home.
              </div>
            </div>
          </div>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-lg text-sm font-bold bg-charcoal-900 hover:bg-charcoal-800 text-white transition-colors shrink-0"
          >
            Upgrade to the Full System ($27)
          </a>
        </div>
      </div>
    </section>
  );
}
