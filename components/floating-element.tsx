"use client";
import { motion } from "framer-motion";
import React from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  intensity?: number;
}

function FloatingElement({
  children,
  duration = 3,
  intensity = 6,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingElement;
