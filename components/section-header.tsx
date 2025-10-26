"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Reusable section header with consistent animation and styling
 * Used across FeatureSection, PricingSection, and TestimonialSection
 */
export default function SectionHeader({
  title,
  subtitle,
  className = "text-center mb-16",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}
