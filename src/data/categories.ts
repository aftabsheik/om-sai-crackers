export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: string;
  badge?: string;
  highlight: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "sparklers",
    name: "Sparklers",
    description: "Classic golden, color, and electric sparkler sticks bringing timeless joy to children and family celebrations.",
    image: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=800&q=80",
    itemCount: "10+ Varieties",
    badge: "Family Favorite",
    highlight: "Safe Handheld Sparks"
  },
  {
    id: "flower-pots",
    name: "Flower Pots",
    description: "Magnificent cascading fountain showers, multi-color volcano bursts, and crackling heights that brighten the courtyard.",
    image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=800&q=80",
    itemCount: "8+ Varieties",
    badge: "Bestseller",
    highlight: "Grand Fountain Shower"
  },
  {
    id: "rockets",
    name: "Rockets",
    description: "High-altitude whistling rockets soaring straight into the night sky with dazzling bursts of vivid sparkling colors.",
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80",
    itemCount: "6+ Varieties",
    badge: "High Altitude",
    highlight: "Sky Burst Peonies"
  },
  {
    id: "ground-chakkars",
    name: "Ground Chakkars",
    description: "Fast rotating ground wheels radiating luminous circular spark patterns and vibrant multicolor rings.",
    image: "https://images.unsplash.com/photo-1576723417715-6b408c988c23?auto=format&fit=crop&w=800&q=80",
    itemCount: "5+ Varieties",
    badge: "Popular Classic",
    highlight: "Whirling Light Wheel"
  },
  {
    id: "fancy-crackers",
    name: "Fancy Crackers",
    description: "Multi-shot aerial repeating cakes, colorful sky shots, night fountains, and festive celebration novelties.",
    image: "https://images.unsplash.com/photo-1533230807904-61cb19551ee4?auto=format&fit=crop&w=800&q=80",
    itemCount: "12+ Varieties",
    badge: "Sky Show",
    highlight: "Multi-Shot Aerials"
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    description: "Curated assorted festival combo packs and grand gift hampers for complete, hassle-free family celebrations.",
    image: "https://images.unsplash.com/photo-1513297887119-d46091b24b80?auto=format&fit=crop&w=800&q=80",
    itemCount: "6+ Combos",
    badge: "Great Value",
    highlight: "Complete Family Packs"
  }
];
