import heroFoodFilm from '../assets/images/hero_food_film_1790484358843.jpg';
import saladPrepPoster from '../assets/images/salad_prep_poster_1790484370124.jpg';
import smoothieSignature from '../assets/images/smoothie_signature_1790484388022.jpg';
import powerMealRicebox from '../assets/images/power_meal_ricebox_1790484400018.jpg';
import baguetteCafeArtisan from '../assets/images/baguette_cafe_artisan_1790484411604.jpg';

export interface FoodImageItem {
  image: string;
  title: string;
  category?: string;
}

export const foodImages: FoodImageItem[] = [
  {
    image: saladPrepPoster,
    title: 'Tossed Farm Greens & Seeds',
    category: 'Salad prep'
  },
  {
    image: smoothieSignature,
    title: 'Blueberry & Avocado Blend',
    category: 'Smoothies'
  },
  {
    image: powerMealRicebox,
    title: 'Peri Peri Paneer Power Box',
    category: 'Power meals'
  },
  {
    image: baguetteCafeArtisan,
    title: 'Paneer Delight Artisan Baguette',
    category: 'Baguettes'
  },
  {
    image: heroFoodFilm,
    title: 'Heirloom Tomatoes & Olive Oil',
    category: 'Fresh prep'
  },
  {
    image: saladPrepPoster,
    title: 'Shaved Radish & Romaine',
    category: 'Hand preparation'
  },
  {
    image: smoothieSignature,
    title: 'Cold Pressed Fruit Elixir',
    category: 'Cold drinks'
  },
  {
    image: powerMealRicebox,
    title: 'Crispy Veg & Edamame Bowl',
    category: 'Grain bowls'
  },
  {
    image: baguetteCafeArtisan,
    title: 'Crusty Herb Sourdough Baguette',
    category: 'Breads'
  },
  {
    image: heroFoodFilm,
    title: 'Slow Extraction Espresso',
    category: 'Coffee'
  },
  {
    image: saladPrepPoster,
    title: 'Citrus Vinaigrette Drizzle',
    category: 'Dressing craft'
  },
  {
    image: smoothieSignature,
    title: 'Mango Seasonal Signature',
    category: 'Seasonal blends'
  },
  {
    image: powerMealRicebox,
    title: 'Golden Mushroom Rice Box',
    category: 'Hot kitchen'
  },
  {
    image: baguetteCafeArtisan,
    title: 'Sun-dried Tomato Baguette',
    category: 'Artisanal bake'
  },
  {
    image: heroFoodFilm,
    title: 'Saligramam Morning Prep',
    category: 'Café craft'
  },
  {
    image: saladPrepPoster,
    title: 'Whole Grain Salad Bowl',
    category: 'Fresh daily'
  },
  {
    image: smoothieSignature,
    title: 'Fig Anjeer Velvet Smoothie',
    category: 'Smoothies'
  },
  {
    image: powerMealRicebox,
    title: 'Egg & Cheddar Rice Box',
    category: 'Protein fuel'
  }
];

export const lifestyleImages: string[] = [
  heroFoodFilm,
  smoothieSignature,
  saladPrepPoster,
  powerMealRicebox,
  baguetteCafeArtisan
];
