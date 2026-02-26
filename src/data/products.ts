import rockSaltMain from "@/assets/product/Rock salt.png";
import sackSalt1 from "@/assets/product/Sack salt.png";
import sackSalt2 from "@/assets/product/Sack salt 2.png";
import twoSacks from "@/assets/product/2 Full Sacks.png";
import sackScoop from "@/assets/product/Sack Scoop.png";
import candleScoop from "@/assets/product/Salt Candle Scoop.png";
import guideBook from "@/assets/product/Guide book.png";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  ritualUsage: string;
  packagingStory: string;
  category: "rock-salt" | "bath-ritual" | "space-reset" | "gift-sets" | "accessories";
  variationLabel?: string;
  variations: { label: string; weight: string; price: number; image?: string }[];
  tags: string[];
  inStock: boolean;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "pure-earth-rock-salt",
    name: "Pure Earth Rock Salt",
    shortDescription: "Unrefined rock salt crystals, hand-selected from ancient mineral deposits.",
    longDescription: "Pure Earth is our signature rock salt — untouched by processing, rich in trace minerals, and as old as the land itself. Each crystal carries the story of deep geological time. Use it to season your food, your bath, or your space. This is salt the way the earth intended it.",
    ritualUsage: "Place a small bowl of Pure Earth near your front door as a grounding gesture. Replace weekly to keep your entryway feeling clear and intentional.",
    packagingStory: "Hand-packed in a woven jute sack, tied with unbleached cotton cord. Every package is made by local artisans who understand that how something arrives matters as much as what's inside.",
    category: "rock-salt",
    variations: [
      { label: "3days package", weight: "250g", price: 12.99, image: rockSaltMain },
      { label: "7 days package", weight: "500g", price: 19.99, image: sackSalt1 },
    ],
    tags: ["bestseller", "natural", "unrefined"],
    inStock: true,
    image: rockSaltMain,
    featured: true,
  },
  {
    id: "clear-space-reset-salt",
    name: "Clear Space Reset Salt",
    shortDescription: "Sage-blended salt for refreshing rooms and clearing stale energy.",
    longDescription: "Clear Space is our answer to the smoke-heavy space clearing traditions. This blend of coarse salt and dried sage can be placed in corners of rooms, near doors, or on shelves. It absorbs what feels stagnant and brings a sense of reset without burning anything.",
    ritualUsage: "Place small bowls of Clear Space in the four corners of any room that feels heavy or stale. Leave for 48 hours, then discard the salt outdoors on bare earth.",
    packagingStory: "Comes in a hand-woven palm leaf basket with a fitted lid — designed to sit beautifully on any surface while doing its quiet work.",
    category: "space-reset",
    variations: [
      { label: "3days package", weight: "500g", price: 12.99, image: sackSalt2 },
      { label: "7 days package", weight: "1.2kg", price: 19.99, image: twoSacks },
    ],
    tags: ["sage", "space-clearing", "smoke-free"],
    inStock: true,
    image: sackScoop,
    featured: true,
  },
  {
    id: "new-dawn-reset-salt",
    name: "New Dawn Reset Salt",
    shortDescription: "Eucalyptus and earth salt for fresh starts and new spaces.",
    longDescription: "New Dawn was created for transitions — moving into a new home, starting a new chapter, or simply wanting a fresh feeling in a familiar space. The eucalyptus lifts while the earth salt grounds. Together, they create a sense of beginning.",
    ritualUsage: "Before settling into a new space, sprinkle New Dawn salt across the threshold. Sweep it outward after one hour. It's a quiet ceremony of welcome.",
    packagingStory: "Packed in a terracotta-toned cotton bag with hand-printed eucalyptus leaf motifs. The bag is washable and reusable.",
    category: "space-reset",
    variations: [
      { label: "3days package", weight: "400g", price: 12.99, image: sackSalt1 },
      { label: "7 days package", weight: "1kg", price: 19.99, image: twoSacks },
    ],
    tags: ["eucalyptus", "new-beginnings", "transition"],
    inStock: true,
    image: candleScoop,
  },
  {
    id: "ritual-guide-booklet",
    name: "Ritual Guide Booklet",
    shortDescription: "A printed guide to Mo Saints rituals, grounding practices, and salt care.",
    longDescription: "This 32-page booklet is printed on recycled card stock and covers everything from basic salt care to guided rituals for each of our products. It also includes reflections on the Mo Saints philosophy — earth, simplicity, balance — and how to bring that into your everyday life.",
    ritualUsage: "Read it slowly. Pick one ritual to start with. Return to it when you need grounding or inspiration.",
    packagingStory: "Saddle-stitched with a card stock cover, stamped with the Mo Saints mark. Designed to be kept, not discarded.",
    category: "accessories",
    variationLabel: "Format",
    variations: [
      { label: "Physical Booklet", weight: "32 pages", price: 7.00, image: guideBook },
    ],
    tags: ["guide", "printed", "educational"],
    inStock: true,
    image: guideBook,
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "rock-salt", label: "Rock Salt" },
  { id: "space-reset", label: "Space Reset Salt" },
  { id: "accessories", label: "Accessories" },
] as const;

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
