import smoothieSignature from '../assets/images/smoothie_signature_1790484388022.jpg';
import powerMealRicebox from '../assets/images/power_meal_ricebox_1790484400018.jpg';
import baguetteCafeArtisan from '../assets/images/baguette_cafe_artisan_1790484411604.jpg';
import heroFoodFilm from '../assets/images/hero_food_film_1790484358843.jpg';
import saladPrepPoster from '../assets/images/salad_prep_poster_1790484370124.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'smoothies' | 'power-meals' | 'baguettes' | 'drinks';
  categoryLabel: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Veg Crunchy Rice Box',
    category: 'power-meals',
    categoryLabel: 'POWER MEAL',
    price: '₹279',
    description: 'Charred seasonal vegetables, roasted chickpeas, seasoned rice, house sesame vinaigrette.',
    image: powerMealRicebox,
    featured: true
  },
  {
    id: 'm2',
    name: 'Peri Peri Paneer Rice Box',
    category: 'power-meals',
    categoryLabel: 'POWER MEAL',
    price: '₹299',
    description: 'Tender cottage cheese tossed in smoky peri-peri glaze with bell peppers & spiced brown rice.',
    image: powerMealRicebox,
    featured: true
  },
  {
    id: 'm3',
    name: 'Cocoa Power',
    category: 'drinks',
    categoryLabel: 'ENERGY ELIXIR',
    price: '₹199',
    description: 'Raw cacao, organic dates, almond butter, Himalayan pink salt & cold-frothed oat milk.',
    image: heroFoodFilm,
    featured: true
  },
  {
    id: 'm4',
    name: 'Mixed Fruit Bowl',
    category: 'smoothies',
    categoryLabel: 'FRESH BOWL',
    price: '₹229',
    description: 'Dragon fruit, kiwi, blueberries, pomegranate pearls, toasted pumpkin seeds, chia gel.',
    image: saladPrepPoster,
    featured: true
  },
  {
    id: 'm5',
    name: 'Cold Coffee',
    category: 'drinks',
    categoryLabel: 'COFFEE BAR',
    price: '₹179',
    description: 'Double shot slow-dripped Arabica brew shaken over ice with smooth milk and raw jaggery.',
    image: heroFoodFilm,
    featured: true
  },
  {
    id: 'm6',
    name: 'Blueberry Signature Smoothie',
    category: 'smoothies',
    categoryLabel: 'SMOOTHIE',
    price: '₹189',
    description: 'Antioxidant-rich wild blueberries, ripe banana, soaked chia and light organic yogurt.',
    image: smoothieSignature,
    featured: false
  },
  {
    id: 'm7',
    name: 'Avocado Signature Smoothie',
    category: 'smoothies',
    categoryLabel: 'SMOOTHIE',
    price: '₹209',
    description: 'Creamy Hass avocado, baby spinach, lime zest, cold-pressed apple and floral raw honey.',
    image: smoothieSignature,
    featured: false
  },
  {
    id: 'm8',
    name: 'Paneer Delight Baguette',
    category: 'baguettes',
    categoryLabel: 'BAGUETTE',
    price: '₹369',
    description: 'Crisp artisan baguette with grilled paneer steak, basil pesto, vine-ripe tomato, rocket.',
    image: baguetteCafeArtisan,
    featured: false
  },
  {
    id: 'm9',
    name: 'Golden Mushroom Rice Box',
    category: 'power-meals',
    categoryLabel: 'POWER MEAL',
    price: '₹289',
    description: 'Seared shiitake and oyster mushrooms, caramelized shallots, garlic greens, whole grain blend.',
    image: powerMealRicebox,
    featured: false
  },
  {
    id: 'm10',
    name: 'Fig Anjeer Signature Smoothie',
    category: 'smoothies',
    categoryLabel: 'SMOOTHIE',
    price: '₹219',
    description: 'Velvety Turkish figs, soaked almonds, cardamom infusion and creamy cashew milk.',
    image: smoothieSignature,
    featured: false
  },
  {
    id: 'm11',
    name: 'Smoked Herb Vegetable Baguette',
    category: 'baguettes',
    categoryLabel: 'BAGUETTE',
    price: '₹349',
    description: 'Slow-charred zucchini, roasted sweet peppers, house garlic cashew cheese on crusty bread.',
    image: baguetteCafeArtisan,
    featured: false
  },
  {
    id: 'm12',
    name: 'Iced Matcha Green Tea',
    category: 'drinks',
    categoryLabel: 'TEA & TONIC',
    price: '₹199',
    description: 'Ceremonial Japanese matcha whisked with fresh coconut water and light mint.',
    image: smoothieSignature,
    featured: false
  }
];

export const menuCategories = [
  { id: 'all', label: 'ALL' },
  { id: 'smoothies', label: 'SMOOTHIES' },
  { id: 'power-meals', label: 'POWER MEALS' },
  { id: 'baguettes', label: 'BAGUETTES' },
  { id: 'drinks', label: 'DRINKS' }
] as const;
