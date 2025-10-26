"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "./logo";

const Footer = () => {
  return (
    <section className="bg-foreground text-background">
      <motion.div className="w-5/6 mx-auto flex">
        <div className="flex flex-col justify-center text-start col-span-2 w-2/5 gap-4 py-16 pr-8">
          <Logo />
          <div className="text-left">
            Connect your apps, automate workflows and let AI handle the
            repetitive tasks. Focus on what matters while Autoflow does the
            rest.
          </div>
          <div className="flex justify-start gap-6 pt-4">
            <FaFacebookF />
            <FaInstagramSquare />
            <FaLinkedinIn />
            <FiMail />
          </div>
        </div>
        <div className="w-3/5 flex justify-between items-start py-16 gap-8">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-bold text-lg">Product</h3>
            <ul className="flex flex-col items-start gap-3">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>API Documentation</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="flex flex-col items-start gap-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Changelog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="flex flex-col items-start gap-3">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Security</li>
              <li>GPDR</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="w-5/6 mx-auto flex flex-col text-muted-foreground text-sm">
        <hr />
        <div className="py-6">&copy; 2025 AutoFlow. All rights reserved.</div>
      </div>
    </section>
  );
};

export default Footer;
