export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  description: string;
  packaging: string;
  price: string;
  badge?: string;
  image: string;
  features: string[];
  duration?: string;
  altitude?: string;
  soundLevel: "Low" | "Medium" | "High";
  popular?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Electric Sparklers (15cm)",
    category: "sparklers",
    categoryName: "Sparklers",
    description: "Classic crackling golden sparklers with smooth, steady burn time. Safe and delightful for children and family celebrations.",
    packaging: "10 Sticks / Box",
    price: "₹95 / Box",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    features: ["Low smoke chemical formulation", "Approx 45s smooth golden burn", "Safety insulated handhold"],
    duration: "45 Seconds",
    soundLevel: "Low",
    popular: true
  },
  {
    id: "prod-2",
    name: "30cm Deluxe Gold Sparklers",
    category: "sparklers",
    categoryName: "Sparklers",
    description: "Extra-long celebration sparkler rods emitting a dense cascade of brilliant golden stars and photo-perfect light trails.",
    packaging: "5 Sticks / Box",
    price: "₹140 / Box",
    badge: "Long Burning",
    image: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=800&q=80",
    features: ["Extended 90s celebration burn", "Deep golden luminous sparks", "Great for festive family photography"],
    duration: "90 Seconds",
    soundLevel: "Low",
    popular: true
  },
  {
    id: "prod-3",
    name: "Flower Pot Special (Standard)",
    category: "flower-pots",
    categoryName: "Flower Pots",
    description: "Traditional Sivakasi cone fountain producing a glorious upward rush of sparkling silver and gold floral showers.",
    packaging: "10 Pcs / Box",
    price: "₹220 / Box",
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=800&q=80",
    features: ["10-12 feet fountain height", "Silver-gold sparkle shower", "Broad anti-topple earthen base"],
    altitude: "10-12 Feet",
    soundLevel: "Medium",
    popular: true
  },
  {
    id: "prod-4",
    name: "Flower Pot Deluxe (Tri-Color)",
    category: "flower-pots",
    categoryName: "Flower Pots",
    description: "High-altitude jumbo fountain cone transitioning smoothly between ruby red, vibrant emerald green, and golden stars.",
    packaging: "5 Pcs / Box",
    price: "₹340 / Box",
    badge: "Deluxe Multi-Color",
    image: "https://images.unsplash.com/photo-1569762391030-cf4f36aa6364?auto=format&fit=crop&w=800&q=80",
    features: ["18+ feet peak shower height", "3-stage vibrant color shift", "Dense crackling star finish"],
    altitude: "18+ Feet",
    soundLevel: "Medium",
    popular: true
  },
  {
    id: "prod-5",
    name: "Ground Chakkar Special",
    category: "ground-chakkars",
    categoryName: "Ground Chakkars",
    description: "High-velocity ground spinning wheel radiating circular golden spark patterns with uninterrupted, smooth rotation.",
    packaging: "10 Pcs / Box",
    price: "₹160 / Box",
    badge: "High Speed",
    image: "https://images.unsplash.com/photo-1576723417715-6b408c988c23?auto=format&fit=crop&w=800&q=80",
    features: ["Precision center spindle", "Bright continuous golden circle", "Uniform high-rpm spin"],
    duration: "25 Seconds",
    soundLevel: "Low",
    popular: true
  },
  {
    id: "prod-6",
    name: "Ground Chakkar Deluxe (Big Wheel)",
    category: "ground-chakkars",
    categoryName: "Ground Chakkars",
    description: "Oversized ground chakkar featuring dual-color spark dispersal and prolonged spinning momentum on flat surfaces.",
    packaging: "10 Pcs / Box",
    price: "₹240 / Box",
    badge: "Jumbo Size",
    image: "https://images.unsplash.com/photo-1576723417715-6b408c988c23?auto=format&fit=crop&w=800&q=80",
    features: ["Double chemical composition", "Extended spin duration", "Multicolor outer ring halo"],
    duration: "40 Seconds",
    soundLevel: "Low",
    popular: false
  },
  {
    id: "prod-7",
    name: "Colour Sky Rocket",
    category: "rockets",
    categoryName: "Rockets",
    description: "Straight-trajectory vertical ascent rocket detonating at peak altitude into a brilliant umbrella of multi-color pearls.",
    packaging: "10 Pcs / Pack",
    price: "₹280 / Pack",
    badge: "High Altitude",
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80",
    features: ["100+ feet high altitude burst", "Vivid color peony effect", "Clean vertical ascent guide stick"],
    altitude: "100+ Feet",
    soundLevel: "High",
    popular: true
  },
  {
    id: "prod-8",
    name: "Fancy Whistling Rocket",
    category: "rockets",
    categoryName: "Rockets",
    description: "Ascends with a piercing acoustic whistle before bursting into a glowing golden willow palm in the night sky.",
    packaging: "5 Pcs / Pack",
    price: "₹310 / Pack",
    badge: "Sound & Light",
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80",
    features: ["Distinct high-pitch whistle", "Golden willow sky burst", "Spectacular night sky visual"],
    altitude: "120+ Feet",
    soundLevel: "High",
    popular: false
  },
  {
    id: "prod-9",
    name: "Twinkling Star Pencil Sticks",
    category: "sparklers",
    categoryName: "Sparklers",
    description: "Handheld slender festive pencils releasing continuous, rhythmic strobe flashes and soft crackling silver sparks.",
    packaging: "10 Pcs / Pack",
    price: "₹120 / Pack",
    badge: "Kids Favorite",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    features: ["Rhythmic twinkling strobe", "Gentle sound & minimal smoke", "Safe handheld cardboard grip"],
    duration: "40 Seconds",
    soundLevel: "Low",
    popular: false
  },
  {
    id: "prod-10",
    name: "Peacock Feather Mega Fountain",
    category: "flower-pots",
    categoryName: "Flower Pots",
    description: "Exclusive wide-angle fountain simulating open royal peacock plumes in radiant cyan, teal, and gold sparks.",
    packaging: "1 Pc / Pack",
    price: "₹260 / Pc",
    badge: "Special Effect",
    image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=800&q=80",
    features: ["180-degree wide spray arc", "Unique cyan and gold palette", "Extraordinary festival highlight"],
    altitude: "14 Feet",
    soundLevel: "Medium",
    popular: false
  },
  {
    id: "prod-11",
    name: "12-Shot Aerial Repeating Cake",
    category: "fancy-crackers",
    categoryName: "Fancy Crackers",
    description: "One-touch automated sky battery firing 12 sequential high-altitude multi-color comets and brocade bursts.",
    packaging: "1 Unit (12 Shots)",
    price: "₹450 / Unit",
    badge: "Sky Show",
    image: "https://images.unsplash.com/photo-1533230807904-61cb19551ee4?auto=format&fit=crop&w=800&q=80",
    features: ["12 automatic sequential bursts", "Multi-color chrysanthemum effects", "Heavy-duty stable box casing"],
    altitude: "80 Feet",
    soundLevel: "High",
    popular: true
  },
  {
    id: "prod-12",
    name: "30-Shot Celebration Sky Cake",
    category: "fancy-crackers",
    categoryName: "Fancy Crackers",
    description: "Grand aerial display system with 30 non-stop aerial bursts featuring crackling palms, golden willow tails, and strobes.",
    packaging: "1 Box (30 Shots)",
    price: "₹950 / Box",
    badge: "Grand Finale",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    features: ["30 synchronized aerial explosions", "Grand finale rapid-fire burst", "Transforms night sky into daylight"],
    altitude: "120 Feet",
    soundLevel: "High",
    popular: true
  },
  {
    id: "prod-13",
    name: "Color Changing 4-in-1 Fountain",
    category: "fancy-crackers",
    categoryName: "Fancy Crackers",
    description: "Innovative multi-chamber fountain shifting sequentially from scarlet red to green sparks, silver rain, and gold showers.",
    packaging: "1 Pc / Box",
    price: "₹290 / Box",
    badge: "Multi-Stage",
    image: "https://images.unsplash.com/photo-1569762391030-cf4f36aa6364?auto=format&fit=crop&w=800&q=80",
    features: ["4 distinct color transitions", "Up to 75 seconds continuous burn", "No dangerous trajectory"],
    duration: "75 Seconds",
    soundLevel: "Medium",
    popular: false
  },
  {
    id: "prod-14",
    name: "Family Joy Gift Box (25 Items)",
    category: "gift-boxes",
    categoryName: "Gift Boxes",
    description: "Handpicked starter assortment containing sparklers, chakkars, flower pots, and twinkling novelties for memorable celebrations.",
    packaging: "1 Assorted Box (25 Items)",
    price: "₹1,250 / Box",
    badge: "Value Pack",
    image: "https://images.unsplash.com/photo-1513297887119-d46091b24b80?auto=format&fit=crop&w=800&q=80",
    features: ["25 assorted festive items", "Balanced variety for all ages", "Festive decorative gift packaging"],
    soundLevel: "Medium",
    popular: true
  },
  {
    id: "prod-15",
    name: "Royal Celebration Gift Box (45 Items)",
    category: "gift-boxes",
    categoryName: "Gift Boxes",
    description: "Premium comprehensive family celebration box packed with deluxe sparklers, mega flower pots, rockets, and aerial shots.",
    packaging: "1 Deluxe Box (45 Items)",
    price: "₹2,450 / Box",
    badge: "Bestseller Combo",
    image: "https://images.unsplash.com/photo-1513297887119-d46091b24b80?auto=format&fit=crop&w=800&q=80",
    features: ["45 premium Sivakasi crackers", "Ground + Aerial items mix", "Perfect for complete family Diwali"],
    soundLevel: "High",
    popular: true
  },
  {
    id: "prod-16",
    name: "Mega Festival Combo Box (60+ Items)",
    category: "gift-boxes",
    categoryName: "Gift Boxes",
    description: "The ultimate fireworks hamper including luxury multi-shot cakes, deluxe sky rockets, oversized fountains, and family sparklers.",
    packaging: "1 Master Box (60+ Items)",
    price: "Price on Request",
    badge: "VIP Collection",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    features: ["60+ premier cracker items", "Includes aerial repeating cake", "Wholesale & retail availability"],
    soundLevel: "High",
    popular: true
  }
];
