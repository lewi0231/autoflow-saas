import Hero from "@/components/hero";
import PricingSection from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-24 mx-auto">
      <Hero />
      <PricingSection />
    </div>
  );
}
