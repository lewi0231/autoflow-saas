"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountAnimation from "./count-animation";
import CustomButton from "./custom-button";
import FloatingElement from "./floating-element";

function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <section className="h-screen w-full flex flex-col items-center bg-linear-to-b from-background via-background to-secondary/20">
      <motion.div
        style={{ opacity, scale }}
        className="flex-1 flex flex-col justify-center items-center"
      >
        {/* <div className="w-full flex justify-center pb-8">
          <span className="border-muted-foreground bg-secondary mx-auto py-2 px-4 rounded-full shadow font-medium flex gap-2 items-center text-sm">
            <RxLightningBolt />
            AI-Powered Automation Platform
          </span>
        </div> */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-7xl font-extrabold tracking-tight"
        >
          <span className="block text-center">Automate Everything,</span>
          <span className="block text-center">Accomplish More</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-7/12 mx-auto text-[1.40rem] text-muted-foreground text-center py-4 tracking-wide "
        >
          Connect your apps, automate workflows and let AI handle the repetitive
          tasks. Focus on what matters while Autoflow does the rest.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-4 pt-6"
        >
          <FloatingElement duration={6} intensity={1}>
            <CustomButton size="lg">
              Start Free Trial <ArrowRight />
            </CustomButton>
          </FloatingElement>
          <FloatingElement duration={3} intensity={2}>
            <CustomButton size="lg" variant="secondary">
              Watch Demo <ArrowRight />
            </CustomButton>
          </FloatingElement>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-between items-center w-3/4 px-8 mb-4"
      >
        <div className="font-bold text-3xl flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <CountAnimation value={50} duration={7} />
            K+
          </div>
          <span className="font-normal text-muted-foreground capitalize text-sm">
            Active Users
          </span>
        </div>
        <div className="font-bold text-3xl flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <CountAnimation value={1000} duration={10} startValue={800} />+
          </div>
          <span className="font-normal text-muted-foreground capitalize text-sm">
            Integrations
          </span>
        </div>
        <div className="font-bold text-3xl flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <CountAnimation
              value={99.9}
              doRound={false}
              duration={5}
              startValue={99.0}
            />
            %
          </div>
          <span className="font-normal text-muted-foreground capitalize text-sm tracking-widest ">
            Uptime
          </span>
        </div>
        <div className="font-bold text-3xl flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <CountAnimation value={10} duration={5} />
            M+
          </div>
          <span className="font-normal text-muted-foreground capitalize text-sm">
            Tasks Automated
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
