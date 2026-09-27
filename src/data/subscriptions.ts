export interface SubscriptionPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  mealBreakdown: string;
  pricing: {
    daily?: string;
    weekly?: string;
    monthly?: string;
  };
  features: string[];
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic-balance',
    name: 'BASIC BALANCE PLAN',
    tagline: 'Light workday nourishment & clean midday vitality.',
    mealBreakdown: '1 Meal + 2 Fresh Juices / Smoothies',
    pricing: {
      daily: '₹349 / day',
      weekly: '₹2,099 / week'
    },
    features: [
      '1 Chef-curated Grain Box or Artisan Baguette daily',
      '2 Cold-pressed signature smoothies or citrus juices',
      'Daily scheduled delivery to home or workspace',
      'Eco-friendly compostable packaging'
    ]
  },
  {
    id: 'premium-power',
    name: 'PREMIUM POWER PLAN',
    badge: 'MOST POPULAR',
    tagline: 'Complete daily nutrition engineered for high performance.',
    mealBreakdown: '2 Meals + 3 Fresh Juices / Smoothies',
    pricing: {
      daily: '₹599 / day',
      weekly: '₹3,699 / week',
      monthly: '₹13,999 / month'
    },
    features: [
      '2 Wholesome Meals (Lunch & Dinner bowls)',
      '3 Signature fruit, superfood & protein smoothies',
      'Balanced macronutrient profiles updated weekly',
      'Priority dispatch slot & custom ingredient notes'
    ]
  },
  {
    id: 'juice-cleanse',
    name: 'JUICE & SMOOTHIE CLEANSE',
    tagline: 'Hydrate, detoxify, and recharge your natural digestion.',
    mealBreakdown: '3 Fresh Juices / Smoothies Daily',
    pricing: {
      daily: '₹249 / day',
      weekly: '₹1,499 / week'
    },
    features: [
      'Morning antioxidant booster (Berry / Citrus blend)',
      'Midday nutrient fuel (Avocado or Green protein blend)',
      'Evening soothing elixir (Botanical / Fig tonic)',
      '100% whole fruits & vegetables, zero preservatives'
    ]
  }
];
