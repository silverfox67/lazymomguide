"use client";

import React, { useState } from "react";
import { Utensils, Clock, Check, ShoppingBag, Sparkles, BookOpen } from "lucide-react";

interface MealWeek {
  weekNumber: number;
  theme: string;
  tagline: string;
  hack: string;
  meals: { name: string; prepTime: string; highlight: string }[];
}

const WEEKS_DATA: MealWeek[] = [
  {
    weekNumber: 1,
    theme: "Sheet Pan & One-Skillet Wins",
    tagline: "One pan to wash, 15-minute hands-on prep, zero sink mountain.",
    hack: "Line every pan with heavy-duty foil. Zero scrubbing required after dinner.",
    meals: [
      { name: "Crispy Kielbasa, Sweet Potato & Pepper Sheet Pan", prepTime: "10 mins", highlight: "Picky-eater staple" },
      { name: "5-Ingredient Honey Mustard Chicken Thighs & Broccoli", prepTime: "12 mins", highlight: "Naturally sweet & kid-approved" },
      { name: "One-Skillet Cheeseburger Macaroni", prepTime: "15 mins", highlight: "Better than the box, made with real cheese" },
      { name: "20-Minute Garlic Butter Shrimp or Chicken Skillet", prepTime: "10 mins", highlight: "Serve over quick microwave jasmine rice" },
      { name: "French Bread Mini-Pizzas & Pre-Washed Green Salad", prepTime: "8 mins", highlight: "Friday movie night hero" },
    ],
  },
  {
    weekNumber: 2,
    theme: "\"Dump & Done\" Slow Cooker Nights",
    tagline: "Dump ingredients into the crockpot before 9 AM; walk into dinner at 5 PM.",
    hack: "Buy pre-chopped onions and frozen minced garlic to eliminate prep knife work completely.",
    meals: [
      { name: "3-Ingredient Salsa Verde Chicken Tacos & Bowls", prepTime: "5 mins", highlight: "Dump & walk away" },
      { name: "Melt-In-Your-Mouth Beef Barbacoa or French Dip Subs", prepTime: "8 mins", highlight: "Comfort food classic" },
      { name: "Creamy Tortellini & Italian Sausage Spinach Soup", prepTime: "10 mins", highlight: "Warm, cozy, universally loved" },
      { name: "Honey Teriyaki Meatballs over Steamed Broccoli & Rice", prepTime: "5 mins", highlight: "Uses pre-cooked frozen meatballs" },
      { name: "BBQ Pulled Chicken Sliders with Crispy Coleslaw", prepTime: "5 mins", highlight: "Kids can assemble their own" },
    ],
  },
  {
    weekNumber: 3,
    theme: "Build-Your-Own Bowls & Finger Foods",
    tagline: "Nobody complains when everyone gets to assemble their own plate.",
    hack: "Use a divided muffin tin or chip-and-dip platter so picky kids feel in total control.",
    meals: [
      { name: "The DIY \"Chipotle\" Burrito Bowl Bar", prepTime: "15 mins", highlight: "Customizable for every diet" },
      { name: "Crispy Sheet Pan Quesadillas with Guacamole", prepTime: "12 mins", highlight: "Bakes 8 quesadillas simultaneously on one sheet" },
      { name: "Greek Lemon Rice, Cucumber & Herb Meatball Bowls", prepTime: "12 mins", highlight: "Fresh, vibrant, minimal oil" },
      { name: "Loaded Baked Potato or Sweet Potato Bar", prepTime: "10 mins", highlight: "Bake spuds in advance or microwave" },
      { name: "The 10-Minute Lazy Charcuterie & Flatbread Night", prepTime: "10 mins", highlight: "No cooking required" },
    ],
  },
  {
    weekNumber: 4,
    theme: "Freezer-Friendly Batch Comforts",
    tagline: "Cook once, eat twice. Fill the freezer so future-you has zero stress.",
    hack: "Double every sauce recipe and freeze in an ice-cube tray for instant flavor upgrades.",
    meals: [
      { name: "One-Pot Creamy Tuscan Chicken Pasta", prepTime: "15 mins", highlight: "Decadent taste, single pot" },
      { name: "Dump & Bake Meatball Rigatoni with Mozzarella", prepTime: "5 mins", highlight: "Uncooked pasta cooks directly in the sauce" },
      { name: "Sheet Pan Fajita Night with Warm Corn Tortillas", prepTime: "12 mins", highlight: "Sizzling and festive" },
      { name: "Hearty 20-Minute Turkey & Black Bean Chili", prepTime: "10 mins", highlight: "Leftovers freeze for up to 3 months" },
      { name: "Friday \"Clean Out the Crisper\" Fried Rice or Stir Fry", prepTime: "15 mins", highlight: "Zero food waste champion" },
    ],
  },
];

export default function MealRotationPreview() {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const current = WEEKS_DATA.find((w) => w.weekNumber === activeWeek) || WEEKS_DATA[0];

  return (
    <section id="meal-preview" className="py-16 md:py-24 bg-cream-50 border-b border-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-200 mb-3">
            <Utensils className="w-3.5 h-3.5" />
            Inside the $14 Toolkit
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
            Look Inside the 4-Week Rotation
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Every single dinner is curated for 15-minute hands-on prep, affordable supermarket ingredients, and high pick-eater tolerance. Click through the weeks below:
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 max-w-3xl mx-auto">
          {WEEKS_DATA.map((w) => {
            const isActive = w.weekNumber === activeWeek;
            return (
              <button
                key={w.weekNumber}
                onClick={() => setActiveWeek(w.weekNumber)}
                className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all text-center border ${
                  isActive
                    ? "bg-sage-600 text-white border-sage-600 shadow-md shadow-sage-600/20"
                    : "bg-white text-charcoal-700 border-cream-300 hover:bg-cream-100"
                }`}
              >
                <div className="text-xs uppercase tracking-wider opacity-80">Week {w.weekNumber}</div>
                <div className="truncate font-serif text-sm mt-0.5">{w.theme.split(" ")[0]} Style</div>
              </button>
            );
          })}
        </div>

        {/* Active Week Display Card */}
        <div className="bg-white rounded-2xl border border-cream-300 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-cream-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sage-600">
                Week {current.weekNumber} Theme
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-0.5">
                {current.theme}
              </h3>
              <p className="text-sm text-charcoal-600 mt-1 max-w-xl">{current.tagline}</p>
            </div>
            <div className="shrink-0 bg-sage-50 border border-sage-200 px-4 py-2.5 rounded-xl text-xs text-sage-900 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-sage-600" />
              <span>Aisle-Categorized Grocery List Included</span>
            </div>
          </div>

          {/* Meals List */}
          <div className="mt-6 space-y-3">
            {current.meals.map((meal, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-cream-50/70 border border-cream-200 hover:border-sage-300 transition-colors gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal-900 text-sm block">
                      {meal.name}
                    </span>
                    <span className="text-xs text-sage-700 font-medium">
                      ✓ {meal.highlight}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-charcoal-600 self-end sm:self-center font-medium bg-white px-2.5 py-1 rounded-md border border-cream-200">
                  <Clock className="w-3.5 h-3.5 text-sage-600" />
                  <span>Prep: {meal.prepTime}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lazy Mom Pro-Tip */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-950">Lazy Mom Low-Energy Hack: </strong>
              {current.hack}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center mt-10">
          <p className="text-xs text-charcoal-500 mb-3">
            All 4 weeks include printable grocery checklists, fridge cheat-sheets, and quick swap charts.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-sage-700 hover:text-sage-800 underline underline-offset-4"
          >
            Download the Full 4-Week Pack for $14 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
