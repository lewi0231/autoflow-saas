"use client";

import { useIsScrollAtTop } from "@/hooks/useIsScrollAtTop";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import CustomButton from "./custom-button";
import Logo from "./logo";
import TransitionLink from "./transition-link";

const Nav = () => {
  const { isAtTop } = useIsScrollAtTop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        layout
        className={cn("flex justify-center")}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div
          className={cn(
            "flex justify-between items-center fixed  w-5/6 transition-all duration-500 backdrop-blur-3xl z-50",
            isAtTop ? "h-28" : "h-20"
          )}
        >
          <Logo className="" />
          {/* Desktop navigation */}
          <div className="md:flex gap-6 items-center font-semibold hidden">
            <TransitionLink href="#features">Features</TransitionLink>
            <TransitionLink href="#pricing">Pricing</TransitionLink>
            <TransitionLink href="#testimonials">Testimonials</TransitionLink>
          </div>
          {/* Desktop Sign in button */}
          <div className="hidden md:block">
            <CustomButton size="md">Sign In</CustomButton>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <IoClose className="w-8 h-8 cursor-pointer" />
            ) : (
              <RxHamburgerMenu className="w-8 h-8 md:hidden cursor-pointer" />
            )}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-0 bg-black/40 backdrop-blur-md z-40 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-8 pt-28 w-5/6 mx-auto">
                <TransitionLink
                  href={"#features"}
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold"
                >
                  Features
                </TransitionLink>
                <TransitionLink
                  href={"#pricing"}
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold"
                >
                  Pricing
                </TransitionLink>
                <TransitionLink
                  href={"#testimonials"}
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold"
                >
                  Testimonials
                </TransitionLink>
                <div className="mt-4">
                  <CustomButton size="sm" className="w-full">
                    Sign In
                  </CustomButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
