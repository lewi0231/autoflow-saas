import Hero from "@/components/hero";
import dynamic from "next/dynamic";

// Dynamically load below-the-fold sections to reduce initial bundle size
// and avoid long main-thread tasks
const FeatureSection = dynamic(() => import("@/components/feature-section"), {
  ssr: true,
});

const TestimonialSection = dynamic(
  () => import("@/components/testimonial-section"),
  {
    ssr: true,
  }
);

const PricingSection = dynamic(() => import("@/components/pricing-section"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-24 mx-auto">
      <Hero />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
    </div>
  );
}
