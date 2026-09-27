import smoothieSignature from '../assets/images/smoothie_signature_1790484388022.jpg';
import powerMealRicebox from '../assets/images/power_meal_ricebox_1790484400018.jpg';
import baguetteCafeArtisan from '../assets/images/baguette_cafe_artisan_1790484411604.jpg';

export interface StackCardItem {
  id: string;
  categoryNumber: string;
  pillLabel?: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  featuredDishes: {
    name: string;
    price: string;
    description: string;
  }[];
}

export const wellnessStackCards: StackCardItem[] = [
  {
    id: 'smoothies',
    categoryNumber: '01',
    category: 'SMOOTHIES',
    headline: 'Signature blends, fruits and fresh flavours made for a vibrant start.',
    description: 'Crafted with ripe whole fruits, plant seeds, and wholesome bases. No artificial concentrates, pure vibrant nourishment.',
    image: smoothieSignature,
    featuredDishes: [
      { name: 'Blueberry Signature Smoothie', price: '₹189', description: 'Wild blueberries, banana, chia seeds, oat milk' },
      { name: 'Avocado Signature Smoothie', price: '₹209', description: 'Hass avocado, fresh spinach, lime zest, clover honey' },
      { name: 'Strawberry Signature Smoothie', price: '₹189', description: 'Sun-ripened strawberries, greek yogurt, flax seeds' },
      { name: 'Mango Seasonal Signature Smoothie', price: '₹199', description: 'Fresh Alphonso pulp, coconut nectar, mint' },
      { name: 'Fig Anjeer Signature Smoothie', price: '₹219', description: 'Sun-dried fig puree, almonds, warm spices, cashew milk' }
    ]
  },
  {
    id: 'power-meals',
    categoryNumber: '02',
    category: 'POWER MEALS',
    headline: 'Wholesome rice boxes and satisfying combinations built for real energy.',
    description: 'Balanced macronutrients designed for clean energy and recovery. Fragrant spiced grains, seasoned proteins, and fresh crunch.',
    image: powerMealRicebox,
    featuredDishes: [
      { name: 'Veg Crunchy Rice Box', price: '₹279', description: 'Charred veggies, crisp chickpeas, jasmine rice, sesame crunch' },
      { name: 'Peri Peri Paneer Rice Box', price: '₹299', description: 'Spiced cottage cheese, roasted bell peppers, garlic herb rice' },
      { name: 'Golden Mushroom Rice Box', price: '₹289', description: 'Shiitake & button mushrooms, caramelized leeks, brown grains' },
      { name: 'Egg & Cheese Rice Box', price: '₹289', description: 'Fluffy eggs, aged cheddar, scallions, spiced brown rice' },
      { name: 'Classic Chicken Rice Box', price: '₹319', description: 'Herb roasted chicken breast, steamed greens, lemon glaze' }
    ]
  },
  {
    id: 'baguettes',
    categoryNumber: '03',
    category: 'BAGUETTES',
    headline: 'Crisp, satisfying café favourites made for a proper break.',
    description: 'Freshly baked artisanal French baguettes with crackling crust and airy crumb, packed with vibrant sauces and premium fillings.',
    image: baguetteCafeArtisan,
    featuredDishes: [
      { name: 'Paneer Delight Baguette', price: '₹369', description: 'Marinated paneer steak, pesto sauce, rocket, roma tomato' },
      { name: 'Smoked Herb Vegetable Baguette', price: '₹349', description: 'Charred zucchini, roasted capsicum, garlic cashew spread' },
      { name: 'Mediterranean Grilled Baguette', price: '₹359', description: 'Kalamata olives, feta crumble, grilled aubergine, mint' },
      { name: 'Spiced Mozzarella Crisp Baguette', price: '₹379', description: 'Melted buffalo mozzarella, crushed pepper, sun-dried relish' }
    ]
  }
];
