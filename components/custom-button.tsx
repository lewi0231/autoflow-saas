"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const SIZES = {
  xl: "px-8 py-4",
  lg: "px-6 py-3",
  md: "px-4 py-2",
  sm: "px-2 py-1",
};

const VARIANT = {
  secondary: "bg-secondary text-foreground hover:bg-secondary/90",
  primary: "bg-primary hover:bg-primary/90 ",
};

function CustomButton({
  children,
  size = "sm",
  variant = "primary",
}: {
  children: React.ReactNode;
  size?: keyof typeof SIZES;
  variant?: "secondary" | "primary";
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        " bg-primary text-primary-foreground rounded-md font-semibold flex items-center gap-2 transition-colors tracking-wide cursor-pointer",
        SIZES[size],
        VARIANT[variant]
      )}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
