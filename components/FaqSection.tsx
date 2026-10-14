"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is this a monthly subscription or a one-time purchase?",
    answer:
      "This is strictly a 100% one-time purchase. There are zero recurring fees, no surprise renewals, and no subscriptions. You own the files for life and receive future updates automatically.",
  },
  {
    question: "What devices and formats are supported?",
    answer:
      "Every single component comes in universal, high-resolution PDF format (perfect for printing on standard 8.5x11 paper or loading into GoodNotes, Notability, or Apple Books on your tablet). The Tier 2 Household Operating System also includes a ready-to-use Notion template you can duplicate with one click.",
  },
  {
    question: "My kids are very picky. Will they actually eat these dinners?",
    answer:
      "Yes! These dinners were specifically engineered around 'deconstructed' and universally loved staples (tacos, sheet pan sausages, mild honey-mustard chicken, burger bowls, slow-cooker shredded meats). We explicitly include a Picky-Eater Modification Sheet showing how to modify each dinner with zero extra cooking pans.",
  },
  {
    question: "How fast do I get my download after checking out?",
    answer:
      "Immediately. As soon as your Stripe payment completes, our automated edge system generates a secure 24-hour cryptographic download link and sends it to your email within seconds. You can start planning tonight.",
  },
  {
    question: "What will appear on my credit card or bank statement?",
    answer:
      "For your clarity and privacy, charges will appear on your statement as 'TRIDENT* LAZYMOM'. Billing, technical fulfillment, and customer support are securely managed by Trident Website Design.",
  },
  {
    question: "What if I get it and it doesn't work for my household?",
    answer:
      "We offer a 30-day household sanity guarantee. If you don't feel like this system saved you stress and paid for itself at the grocery store, simply email support@weselldigital.com and we will issue a full, prompt refund.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-cream-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-charcoal-600">
            Everything you need to know about formats, delivery, and guarantees.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-cream-300 rounded-xl overflow-hidden transition-colors bg-cream-50/50 hover:bg-cream-50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-charcoal-900 text-base"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sage-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-sm text-charcoal-600 leading-relaxed font-sans border-t border-cream-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
