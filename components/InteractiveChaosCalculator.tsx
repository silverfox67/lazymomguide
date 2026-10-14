"use client";

import React, { useState, useMemo } from "react";
import { DollarSign, Clock, AlertTriangle, ArrowRight, Sparkles, TrendingDown } from "lucide-react";

export default function InteractiveChaosCalculator() {
  const [familySize, setFamilySize] = useState<number>(4);
  const [takeoutNights, setTakeoutNights] = useState<number>(6); // per month
  const [takeoutAvgCost, setTakeoutAvgCost] = useState<number>(55); // per order
  const [dailyStressMinutes, setDailyStressMinutes] = useState<number>(30); // minutes/day

  // Computations
  const results = useMemo(() => {
    // Annual panic takeout cost
    const monthlyTakeout = takeoutNights * takeoutAvgCost;
    const annualTakeout = monthlyTakeout * 12;

    // Monthly wasted groceries (expired food due to lack of a plan)
    // Avg household wastes ~ $35/person/month
    const monthlyFoodWaste = Math.round(familySize * 28);
    const annualFoodWaste = monthlyFoodWaste * 12;

    // Total financial leak
    const totalAnnualLeak = annualTakeout + annualFoodWaste;

    // Hours spent worrying/arguing/scrambling per year
    const annualStressHours = Math.round((dailyStressMinutes * 365) / 60);

    // With Lazy Mom Guide: Cut panic takeout by 75%, cut grocery waste by 80%
    const projectedSavings = Math.round(totalAnnualLeak * 0.72);

    return {
      annualTakeout,
      annualFoodWaste,
      totalAnnualLeak,
      annualStressHours,
      projectedSavings,
    };
  }, [familySize, takeoutNights, takeoutAvgCost, dailyStressMinutes]);

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-terracotta-100 text-terracotta-700 border border-terracotta-200 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            Interactive Household Reality Check
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
            The True Cost of Dinner Chaos
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            When you don’t have an automatic rotation, dinner defaults to last-minute takeout, wasted produce, and hours of mental exhaust. Adjust the sliders to see your family’s real numbers:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-cream-50 p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-6">
            <h3 className="font-serif text-lg font-bold text-charcoal-900 pb-3 border-b border-cream-200 flex items-center justify-between">
              <span>Your Household Habits</span>
              <span className="text-xs font-sans font-semibold text-sage-600 uppercase tracking-wider">
                Live Estimates
              </span>
            </h3>

            {/* Slider 1: Family Size */}
            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-semibold text-charcoal-800">Family Members Eating at Home:</span>
                <span className="font-bold text-sage-700 text-base">{familySize} People</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={familySize}
                onChange={(e) => setFamilySize(Number(e.target.value))}
                className="w-full accent-sage-600 cursor-pointer h-2 bg-cream-300 rounded-lg"
              />
            </div>

            {/* Slider 2: Panic Takeout Nights per Month */}
            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-semibold text-charcoal-800">
                  "Too Tired to Cook" Takeout Nights (per Month):
                </span>
                <span className="font-bold text-terracotta-600 text-base">{takeoutNights} Nights</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={takeoutNights}
                onChange={(e) => setTakeoutNights(Number(e.target.value))}
                className="w-full accent-terracotta-500 cursor-pointer h-2 bg-cream-300 rounded-lg"
              />
              <span className="text-[11px] text-charcoal-500 mt-1 block">
                DoorDash, drive-thrus, or panic pizza orders when the fridge feels empty.
              </span>
            </div>

            {/* Slider 3: Average Cost per Takeout Order */}
            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-semibold text-charcoal-800">Average Takeout Bill:</span>
                <span className="font-bold text-charcoal-900 text-base">${takeoutAvgCost} / meal</span>
              </div>
              <input
                type="range"
                min="25"
                max="120"
                step="5"
                value={takeoutAvgCost}
                onChange={(e) => setTakeoutAvgCost(Number(e.target.value))}
                className="w-full accent-sage-600 cursor-pointer h-2 bg-cream-300 rounded-lg"
              />
            </div>

            {/* Slider 4: Daily Minutes Wondering What's for Dinner */}
            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-semibold text-charcoal-800">
                  Minutes Spent Daily Deciding & Scrambling:
                </span>
                <span className="font-bold text-charcoal-900 text-base">{dailyStressMinutes} Mins/Day</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={dailyStressMinutes}
                onChange={(e) => setDailyStressMinutes(Number(e.target.value))}
                className="w-full accent-sage-600 cursor-pointer h-2 bg-cream-300 rounded-lg"
              />
              <span className="text-[11px] text-charcoal-500 mt-1 block">
                Standing in front of the pantry, texting your partner "What do you want for dinner?", or making emergency store runs.
              </span>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-5 bg-charcoal-900 text-white p-6 sm:p-8 rounded-2xl border border-charcoal-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-charcoal-800">
              <span className="text-xs uppercase font-bold tracking-wider text-sage-400">
                Your Annual Breakdown
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-charcoal-800 text-charcoal-300 border border-charcoal-700 font-mono">
                12-Month Projection
              </span>
            </div>

            <div>
              <span className="text-xs text-charcoal-400 uppercase tracking-wide block mb-1">
                Annual Financial Leak (Takeout + Food Waste)
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-terracotta-400 flex items-center">
                <span>${results.totalAnnualLeak.toLocaleString()}</span>
                <span className="text-xs text-charcoal-400 font-sans ml-2 font-normal">/ year</span>
              </div>
              <div className="text-xs text-charcoal-400 mt-2 space-y-1">
                <div className="flex justify-between">
                  <span>• Panic Takeout / Delivery:</span>
                  <span className="text-charcoal-200">${results.annualTakeout.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>• Rotten veggies & forgotten pantry waste:</span>
                  <span className="text-charcoal-200">${results.annualFoodWaste.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800">
              <span className="text-xs text-charcoal-400 uppercase tracking-wide block mb-1">
                Mental Bandwidth Lost
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <Clock className="w-6 h-6 text-sage-400" />
                <span>{results.annualStressHours} Hours</span>
              </div>
              <p className="text-xs text-charcoal-400 mt-1.5 leading-relaxed">
                That’s the equivalent of over <strong>{Math.round(results.annualStressHours / 24)} full 24-hour days</strong> spent standing in front of the fridge stressed.
              </p>
            </div>

            {/* The Solution Callout */}
            <div className="bg-charcoal-800/90 border border-sage-700/50 p-4 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sage-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>With the Lazy Mom 4-Week Rotation:</span>
              </div>
              <div className="text-lg font-bold text-white flex items-center gap-1">
                <span>Save ~${results.projectedSavings.toLocaleString()}</span>
                <span className="text-xs font-normal text-sage-300">/ year</span>
              </div>
              <p className="text-[11px] text-charcoal-300 mt-1">
                Our one-time $14 meal pack pays for itself before your first grocery receipt prints.
              </p>
            </div>

            <a
              href="#pricing"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold bg-sage-500 hover:bg-sage-400 text-charcoal-950 transition-colors shadow-md shadow-sage-500/20"
            >
              <span>Stop the Dinner Leak for $14</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
