"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const SIZES = {
  xl: "px-8 py-4",
  lg: "px-6 py-3",
  md: "px-4 py-2",
  sm: "px-2 py-1",
} as const;

const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 border",
} as const;

interface CustomButtonProps {
  children: React.ReactNode;
  size?: keyof typeof SIZES;
  variant?: keyof typeof VARIANTS;
}

/**
 * Reusable button component with consistent sizing and variants
 * Used throughout the application for CTA buttons
 */
function CustomButton({
  children,
  size = "sm",
  variant = "primary",
}: CustomButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-md font-semibold flex items-center gap-2 transition-colors tracking-wide cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        SIZES[size],
        VARIANTS[variant]
      )}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
