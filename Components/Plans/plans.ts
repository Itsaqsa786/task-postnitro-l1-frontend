// src/data/plans.ts (or adjust path as needed)
export type Plan = {
  id: string;
  priceMonthly: string;
  priceYearly: string;
  highlight?: boolean;
};

export const basePlans: Omit<Plan, "priceMonthly" | "priceYearly">[] = [
  {
    id: "starter",
  },
  {
    id: "solopreneur",
    highlight: true,
  },
  {
    id: "team",
  },
];

export const freePlanId = "free";

export const planPrices: Record<string, { monthly: string; yearly: string }> = {
  starter: { monthly: "$10/month", yearly: "$7/month" },
  solopreneur: { monthly: "$20/month", yearly: "$14/month" },
  team: { monthly: "$50/month", yearly: "$35/month" },
  free: { monthly: "$0/month", yearly: "$0/month" },
};

export const planFeatureCounts: Record<string, number> = {
  starter: 4,
  solopreneur: 8,
  team: 4,
  free: 3,
};
