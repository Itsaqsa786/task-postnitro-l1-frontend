// src/data/plans.ts (or adjust path as needed)

export type Plan = {
  title: string;
  price: string;
  originalPrice?: string;
  saveText?: string;
  subtext: string;
  features: string[];
  highlight?: boolean;
};

export const monthlyPlans: Plan[] = [
  {
    title: "STARTER PLAN",
    price: "$10/month",
    subtext: "Perfect for getting started.",
    features: [
      "Watermark-free exports",
      "Access to basic AI models (GPT-4o, Claude Haiku)",
      "30 downloads/month",
      "8 AI Generated Slides per Carousel",
    ],
  },
  {
    title: "SOLOPRENEUR PLAN",
    price: "$20/month",
    subtext: "Perfect for solo creators.",
    features: [
      "Watermark-free exports",
      "Access to advanced AI models (GPT-4, Claude Sonnet)",
      "15 AI Generated Slides per Carousel",
      "Upto 5 Brands",
      "Unlimited downloads",
      "Access to all templates",
      "Custom color palettes",
      "Create custom templates",
    ],
    highlight: true,
  },
  {
    title: "TEAM PLAN",
    price: "$50/month",
    subtext: "Perfect for small teams.",
    features: [
      "100 AI generated images per month",
      "Up to 5 workspaces",
      "Up to 20 slides per carousel",
      "15 custom templates",
    ],
  },
];

export const yearlyPlans: Plan[] = [
  {
    title: "STARTER PLAN",
    price: "$10/month", // Assuming yearly price is still shown per month
    originalPrice: "$10/month", // Kept for consistency
    saveText: "",
    subtext: "Perfect for getting started.",
    features: [
      "Watermark-free exports",
      "Access to basic AI models (GPT-4o, Claude Haiku)",
      "30 downloads/month",
      "8 AI Generated Slides per Carousel",
    ],
  },
  {
    title: "SOLOPRENEUR PLAN",
    price: "$12/month", // Yearly price shown per month
    originalPrice: "Previously: $20/month",
    saveText: "Saves you $96 per year.",
    subtext: "Perfect for solo creators.",
    features: [
      "Watermark-free exports",
      "Access to advanced AI models (GPT-4, Claude Sonnet)",
      "15 AI Generated Slides per Carousel",
      "Upto 5 Brands",
      "Unlimited downloads",
      "Access to all templates",
      "Custom color palettes",
      "Create custom templates",
    ],
    highlight: true,
  },
  {
    title: "TEAM PLAN",
    price: "$30/month", // Yearly price shown per month
    originalPrice: "Previously: $50/month",
    saveText: "Saves you $240 per year.",
    subtext: "Perfect for small teams.",
    features: [
      "100 AI generated images per month",
      "Up to 5 workspaces",
      "Up to 20 slides per carousel",
      "15 custom templates",
    ],
  },
];

export const plansData: Record<"monthly" | "yearly", Plan[]> = {
  monthly: monthlyPlans,
  yearly: yearlyPlans,
};

export const freePlan: Plan = {
  title: "FREE PLAN",
  price: "$0/month",
  subtext: "To help you get started.",
  features: [
    "Access to GPT 4o-Mini",
    "5 downloads per month",
    "Access to basic templates",
  ],
};
