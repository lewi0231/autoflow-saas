"use client";
import { motion } from "framer-motion";
import React from "react";
function RotatingElement({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ rotate: 1440 }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 0,
      }}
    >
      {children}
    </motion.div>
  );
}

export default RotatingElement;
