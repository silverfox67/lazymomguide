"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveChaosCalculator from "@/components/InteractiveChaosCalculator";
import MealRotationPreview from "@/components/MealRotationPreview";
import DashboardPreview from "@/components/DashboardPreview";
import PricingMatrix from "@/components/PricingMatrix";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InteractiveChaosCalculator />
        <MealRotationPreview />
        <DashboardPreview />
        <PricingMatrix />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
