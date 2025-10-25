"use client";

import { pricing, PricingOption, type Pricing } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

function PricingSection() {
  const [selectedPricing, setSelectedPricing] =
    useState<PricingOption>("professional");

  const handleOnSelect = (pricingOption: PricingOption) => {
    setSelectedPricing(pricingOption);
  };

  return (
    <section className="bg-secondary/40 h-screen w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Choose Your Plan
        </h2>
        <p className="text-muted-foreground text-lg">
          Scale your automation as you grow
        </p>
      </motion.div>
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
      className={`relative p-8 rounded-lg border min-w-[16rem] cursor-pointer ${
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
        className={`w-full py-3 rounded-md font-semibold transition-colors duration-500 ${
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
