export const pricing = [
  {
    name: "starter",
    price: "49",
    features: [
      { included: true, text: "1,000 tasks/month" },
      { included: true, text: "10 active workflows" },
      { included: true, text: "Email support" },
      { included: true, text: "Basic integrations" },
      { included: true, text: "7-day history" },
      { included: false, text: "Advanced analytics" },
      { included: false, text: "Team collaboration" },
      { included: false, text: "SLA guarantee" },
      { included: false, text: "API access" },
    ],
  },
  {
    name: "professional",
    price: "149",
    features: [
      { included: true, text: "10,000 tasks/month" },
      { included: true, text: "Unlimited workflows" },
      { included: true, text: "Priority support" },
      { included: true, text: "Premium integrations" },
      { included: true, text: "30-day history" },
      { included: true, text: "Advanced analytics" },
      { included: true, text: "Team collaboration" },
      { included: false, text: "SLA guarantee" },
      { included: false, text: "API access" },
    ],
    popular: true,
  },
  {
    name: "enterprise",
    price: "399",
    features: [
      { included: true, text: "Unlimited tasks" },
      { included: true, text: "Unlimited workflows" },
      { included: true, text: "24/7 phone support" },
      { included: true, text: "Custom integrations" },
      { included: true, text: "Unlimited history" },
      { included: true, text: "Advanced analytics" },
      { included: true, text: "Dedicated account manager" },
      { included: true, text: "SLA guarantee" },
      { included: true, text: "API access" },
    ],
  },
] satisfies {
  name: "starter" | "professional" | "enterprise";
  price: string;
  features: { included: boolean; text: string }[];
  popular?: boolean;
}[];

export type Pricing = (typeof pricing)[number];

export type PricingOption = (typeof pricing)[number]["name"];

export const testimonials = [
  {
    name: "Alex Thompson",
    role: "Operations Manager",
    content:
      "Autoflow has saved our team 20+ hours per week. The automation possibilities are endless!",
    avatar: "AT",
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    content:
      "We automated our entire customer onboarding process. Setup was incredibly intuitive.",
    avatar: "PP",
  },
  {
    name: "James Liu",
    role: "IT Director",
    content:
      "The integration capabilities are impressive. Finally, all our tools talk to each other seamlessly.",
    avatar: "JL",
  },
];
