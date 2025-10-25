"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.2", "end 0.2"],
  });

  // Transform vertical scroll progress to horizontal translation
  // Adjust these values to control the scroll speed and range
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((400 + 24) * (testimonials.length - 1)) + 400]
  );

  return (
    <section ref={sectionRef} className="h-[300vh] w-5/6 py-20 bg-secondary/40">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 absolute top-32 left-1/2 -translate-x-1/2 w-full z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            What People Are Saying!
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from our community
          </p>
        </motion.div>
        <div className="flex flex-col">
          <motion.div style={{ x }} className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="shrink-0 w-[400px]"
              >
                <Card className="">
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
              {/* First set */}
              <div className="text-2xl font-bold opacity-20">ACME</div>
              <div className="text-2xl font-bold opacity-20">TechCo</div>
              <div className="text-2xl font-bold opacity-20">StartupX</div>
              <div className="text-2xl font-bold opacity-20">BrandCo</div>
              <div className="text-2xl font-bold opacity-20">Amazon</div>
              <div className="text-2xl font-bold opacity-20">Google</div>
              <div className="text-2xl font-bold opacity-20">IBM</div>
              <div className="text-2xl font-bold opacity-20">XIRO</div>
              <div className="text-2xl font-bold opacity-20">InnovateLab</div>

              {/* Duplicate for seamless loop */}
              <div className="text-2xl font-bold opacity-20">ACME</div>
              <div className="text-2xl font-bold opacity-20">TechCo</div>
              <div className="text-2xl font-bold opacity-20">StartupX</div>
              <div className="text-2xl font-bold opacity-20">BrandCo</div>
              <div className="text-2xl font-bold opacity-20">Amazon</div>
              <div className="text-2xl font-bold opacity-20">Google</div>
              <div className="text-2xl font-bold opacity-20">IBM</div>
              <div className="text-2xl font-bold opacity-20">XIRO</div>
              <div className="text-2xl font-bold opacity-20">InnovateLab</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
