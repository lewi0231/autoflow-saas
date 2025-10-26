"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { companyLogos, testimonials } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./section-header";

/**
 * Testimonial Section with horizontal scroll animation
 * - Uses framer-motion for scroll-driven animations
 * - Duplicates testimonials for seamless infinite scroll
 * - Company logos scroll at bottom with CSS animation
 */

// Duplicate testimonials for seamless infinite scrolling effect
const testimonialsForScroll = [...testimonials, ...testimonials];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.2", "end 0.2"],
  });

  // Transform vertical scroll progress to horizontal translation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((400 + 24) * (testimonialsForScroll.length - 1)) + 400]
  );

  return (
    <section
      ref={sectionRef}
      className="h-[300vh] w-5/6 flex flex-col justify-between"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full z-10">
          <SectionHeader
            title="What People Are Saying!"
            subtitle="Real stories from our community"
          />
        </div>
        <div className="flex flex-col">
          <motion.div style={{ x }} className="flex gap-6">
            {testimonialsForScroll.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="shrink-0 w-[400px] "
              >
                <Card className="bg-secondary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute bottom-40 left-0 right-0 overflow-hidden">
            <div className="flex gap-12 items-center animate-scroll">
              {/* Duplicate logos for seamless loop */}
              {companyLogos.map((logo, i) => (
                <div
                  key={`logo-${i}`}
                  className="text-2xl font-bold opacity-20"
                >
                  {logo}
                </div>
              ))}
              {companyLogos.map((logo, i) => (
                <div
                  key={`logo-dup-${i}`}
                  className="text-2xl font-bold opacity-20"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
