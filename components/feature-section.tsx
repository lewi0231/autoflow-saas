"use client";

import { features } from "@/lib/data";
import Icon from "@/lib/icon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [order, setOrder] = useState(features);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle()), 3000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <motion.ul
      className="list-none w-[840px] flex justify-center items-center flex-wrap gap-2 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {order.map((feature) => (
        <motion.li
          key={feature.title}
          layout
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="w-[200px] h-[200px] "
        >
          <Card className="h-full flex flex-col justify-around">
            <CardHeader className="flex items-center gap-4 justify-between text-lg">
              <Icon name={feature.icon} />

              <CardTitle className="flex flex-1 items-center justify-center font-semibold text-primary">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="">
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
    <section className="bg-secondary/60 h-screen flex flex-col justify-center w-full">
      <SectionHeader
        title="Powerful Automation Features"
        subtitle="Everything you need to build, deploy, and manage intelligent automations."
      />
      <FeatureShuffle />
    </section>
  );
};

export default FeatureSection;
