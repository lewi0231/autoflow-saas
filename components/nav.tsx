"use client";

import { useIsScrollAtTop } from "@/hooks/useIsScrollAtTop";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import CustomButton from "./custom-button";
import Logo from "./logo";
import TransitionLink from "./transition-link";

const Nav = () => {
  const { isAtTop } = useIsScrollAtTop();

  return (
    <motion.nav
      layout
      className={cn("flex justify-center")}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div
        className={cn(
          "flex justify-between items-center fixed w-5/6 transition-all duration-500 backdrop-blur-3xl z-50",
          isAtTop ? "h-28" : "h-20"
        )}
      >
        <Logo />
        <div className="flex gap-6 items-center font-semibold">
          <TransitionLink href="#features">Features</TransitionLink>
          <TransitionLink href="#pricing">Pricing</TransitionLink>
          <TransitionLink href="#testimonials">Testimonials</TransitionLink>
        </div>
        <div>
          <CustomButton size="md">Sign In</CustomButton>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
