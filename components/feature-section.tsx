"use client";

import { features } from "@/lib/data";
import Icon from "@/lib/icon";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

/**
 * Feature Section with animated shuffling cards
 * - Cards shuffle every 3 seconds for dynamic presentation
 * - Uses layout animations from framer-motion
 */

const shuffle = () => {
  return features.toSorted(() => Math.random() - 0.5);
};

const FeatureShuffle = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const [order, setOrder] = useState(features);
  const [shuffleCount, setShuffleCount] = useState(0);
  const MAX_SHUFFLES = 3; // Stop after 3 shuffles

  useEffect(() => {
    // Only shuffle when in view and haven't reached max shuffles
    if (isInView && shuffleCount < MAX_SHUFFLES) {
      const timeout = setTimeout(() => {
        setOrder(shuffle());
        setShuffleCount((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, shuffleCount]);

  return (
    <motion.ul
      ref={ref}
      className="list-none w-[840px] flex justify-center items-center flex-wrap gap-3 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {order.map((feature) => (
        <motion.li
          key={feature.title}
          layout
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="w-[200px] h-[220px]"
        >
          <Card className="h-full flex flex-col justify-around bg-linear-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="flex flex-col items-center gap-3 pb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name={feature.icon} className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-center font-bold text-foreground leading-5">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-center text-foreground/70 text-xs leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const FeatureSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center w-full bg-linear-to-b from-secondary/30 via-secondary/50 to-secondary/20 border-t border-border/50 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="relative z-10">
        <SectionHeader
          title="Powerful Automation Features"
          subtitle="Everything you need to build, deploy, and manage intelligent automations."
        />
        <FeatureShuffle />
      </div>
    </section>
  );
};

export default FeatureSection;
