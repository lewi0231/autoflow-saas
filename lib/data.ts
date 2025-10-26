import { IconName } from "./icon";

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
  {
    name: "Richard Bradford",
    role: "Systems Engineer",
    content:
      "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: "RB",
  },
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
  {
    name: "Richard Bradford",
    role: "Systems Engineer",
    content:
      "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: "RB",
  },
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
  {
    name: "Richard Bradford",
    role: "Systems Engineer",
    content:
      "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: "RB",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];

export const features = [
  {
    icon: "Workflow",
    title: "Smart Workflows",
    description:
      "Build complex automation workflows with our intuitive drag-and-drop builder",
  },
  {
    icon: "Zap",
    title: "Instant Execution",
    description:
      "Trigger automations in real-time with lightning-fast processing",
  },
  {
    icon: "GitCommit",
    title: "Multi-Step Logic",
    description:
      "Create sophisticated branching logic and conditional workflows",
  },
  {
    icon: "Database",
    title: "Data Integration",
    description: "Connect to 1000+ apps and services seamlessly",
  },
  {
    icon: "Clock",
    title: "Schedule & Trigger",
    description: "Set up time-based or event-driven automation triggers",
  },
  {
    icon: "BarChart",
    title: "Analytics Dashboard",
    description: "Monitor your automation performance with detailed insights",
  },
  {
    icon: "Mail",
    title: "Intelligent Email Management",
    description: "Auto-categorize, prioritize and draft responses to emails",
  },
  {
    icon: "Calendar",
    title: "Smart Scheduling",
    description: "Optimize meeting times and send invites automatically",
  },
] satisfies { icon: IconName; title: string; description: string }[];

export type Feature = (typeof features)[number];
