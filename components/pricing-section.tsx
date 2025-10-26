"use client";

import { pricing, PricingOption, type Pricing } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./section-header";

/**
 * Pricing Section with interactive card selection
 * - Features animated card selection with spring animations
 * - Shows "Most Popular" badge on selected plan
 * - Uses state to manage selected pricing tier
 */
function PricingSection() {
  const [selectedPricing, setSelectedPricing] =
    useState<PricingOption>("professional");

  const handleOnSelect = (pricingOption: PricingOption) => {
    setSelectedPricing(pricingOption);
  };

  return (
    <section
      id="pricing"
      className="h-screen w-full flex flex-col justify-center py-16 bg-linear-to-b from-secondary/20 via-background to-secondary/30 border-t border-border/50 relative"
    >
      {/* Decorative gradient accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
      <div className="relative z-10">
        <SectionHeader
          title="Choose Your Plan"
          subtitle="Scale your automation as you grow"
        />
        <div className="flex justify-center items-center gap-6">
          {pricing.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isSelected={selectedPricing === plan.name}
              onSelect={handleOnSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const PricingCard = ({
  plan,
  index,
  isSelected = false,
  onSelect,
}: {
  plan: Pricing;
  index: number;
  isSelected: boolean;
  onSelect: (pricingOption: PricingOption) => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      tabIndex={0}
      role="button"
      aria-label={`Select ${plan.name} pricing plan`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(plan.name);
        }
      }}
      className={`relative p-8 rounded-lg border min-w-[16rem] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-shadow ${
        isSelected ? "border-primary bg-card shadow-lg" : ""
      }`}
      animate={{
        scale: isSelected ? 1.05 : 1,
        y: isSelected ? -8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.1,
        duration: 0.7,
      }}
      onClick={() => onSelect(plan.name)}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold text-center text-nowrap">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2 capitalize">{plan.name}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold">${plan.price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            {feature.included ? (
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            )}
            <span className="text-sm">{feature.text}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 1 }}
        className={`w-full py-3 px-4 rounded-md font-semibold transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer ${
          isSelected
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border"
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PricingSection;
