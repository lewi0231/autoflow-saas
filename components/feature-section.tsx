"use client";

import { features } from "@/lib/data";
import Icon from "@/lib/icon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Powerful Automation Features
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to build, deploy, and manage intelligent
          automations.
        </p>
      </motion.div>
      <FeatureShuffle />
    </section>
  );
};

export default FeatureSection;
