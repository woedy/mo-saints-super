import productRockSalt from "@/assets/product-rock-salt.jpg";
import productBathSalt from "@/assets/product-bath-salt.jpg";
import productSpaceSalt from "@/assets/product-space-salt.jpg";
import productGiftSet from "@/assets/product-gift-set.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  ritualUsage: string;
  packagingStory: string;
  category: "rock-salt" | "bath-ritual" | "space-reset" | "gift-sets" | "accessories";
  sizes: { label: string; weight: string; price: number }[];
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
    sizes: [
      { label: "Small", weight: "250g", price: 12.00 },
      { label: "Standard", weight: "500g", price: 18.00 },
      { label: "Family", weight: "1kg", price: 30.00 },
    ],
    tags: ["bestseller", "natural", "unrefined"],
    inStock: true,
    image: productRockSalt,
    featured: true,
  },
  {
    id: "sacred-ground-rock-salt",
    name: "Sacred Ground Rock Salt",
    shortDescription: "Coarse-grain mineral salt with deep earthy undertones.",
    longDescription: "Sacred Ground is a coarser cut of our earth-mined salt, designed for those who like texture and presence in their rituals. The larger crystals dissolve slowly, releasing minerals over time — whether in a warm bath or a ceramic bowl on your shelf.",
    ritualUsage: "Scatter Sacred Ground along window ledges during the new moon. It's a quiet way to mark beginnings and set your space with intention.",
    packagingStory: "Wrapped in a hand-stitched burlap pouch with a Mo Saints clay tag. The packaging is designed to be reused — as a pouch for herbs, keepsakes, or daily essentials.",
    category: "rock-salt",
    sizes: [
      { label: "Standard", weight: "500g", price: 20.00 },
      { label: "Bulk", weight: "1kg", price: 34.00 },
    ],
    tags: ["coarse", "mineral-rich", "ritual"],
    inStock: true,
    image: productRockSalt,
  },
  {
    id: "river-stone-rock-salt",
    name: "River Stone Rock Salt",
    shortDescription: "Smooth, polished salt stones for meditation and display.",
    longDescription: "River Stone salt pieces are naturally tumbled and selected for their smooth, palm-fitting shape. Hold one during meditation or place a few in a wooden bowl for a grounding centerpiece. These are not just salt — they are earth objects, shaped by time.",
    ritualUsage: "Hold a River Stone in your left hand during five minutes of morning stillness. Let the coolness and weight anchor your thoughts before the day begins.",
    packagingStory: "Nestled in a cotton-lined wooden tray, each stone is separated by dried grasses. The tray doubles as a display piece.",
    category: "rock-salt",
    sizes: [
      { label: "Set of 5", weight: "300g", price: 22.00 },
      { label: "Set of 10", weight: "600g", price: 38.00 },
    ],
    tags: ["meditation", "display", "smooth"],
    inStock: true,
    image: productRockSalt,
  },
  {
    id: "evening-calm-bath-salt",
    name: "Evening Calm Bath Salt",
    shortDescription: "Lavender-infused mineral bath salt for unwinding after long days.",
    longDescription: "Evening Calm is blended with dried lavender buds and fine mineral salt to create a bath experience that feels like a deep exhale. The scent is soft, not perfumed — more garden than spa. Let the warm water do the work while the salt draws out the tension of your day.",
    ritualUsage: "Run a warm bath at least an hour before sleep. Add two generous scoops of Evening Calm and dim the lights. Stay for twenty minutes. No screens.",
    packagingStory: "Arrives in a reusable clay-toned glass jar with a wooden lid, wrapped in unbleached muslin cloth.",
    category: "bath-ritual",
    sizes: [
      { label: "Standard", weight: "400g", price: 24.00 },
      { label: "Large", weight: "800g", price: 42.00 },
    ],
    tags: ["lavender", "relaxation", "evening"],
    inStock: true,
    image: productBathSalt,
    featured: true,
  },
  {
    id: "morning-rise-bath-salt",
    name: "Morning Rise Bath Salt",
    shortDescription: "Citrus and rosemary mineral salt to start your day grounded.",
    longDescription: "Morning Rise pairs sun-dried citrus peel with rosemary and coarse mineral salt for a bath that wakes without jolting. It's designed for early risers who want their mornings to feel deliberate, not rushed. The scent is bright but grounded — like stepping outside at dawn.",
    ritualUsage: "Draw a short, warm bath before your morning routine. Add one scoop of Morning Rise and sit for ten minutes with your feet flat on the tub floor. Breathe with your eyes closed.",
    packagingStory: "Packaged in a kraft paper bag with a hand-stamped Mo Saints seal. The bag is compostable and the ink is plant-based.",
    category: "bath-ritual",
    sizes: [
      { label: "Standard", weight: "400g", price: 24.00 },
      { label: "Large", weight: "800g", price: 42.00 },
    ],
    tags: ["citrus", "morning", "energizing"],
    inStock: true,
    image: productBathSalt,
  },
  {
    id: "full-moon-bath-salt",
    name: "Full Moon Bath Salt",
    shortDescription: "A mineral-dense blend for monthly rituals of release and renewal.",
    longDescription: "Full Moon is our richest bath salt — dense with minerals and blended with dried chamomile and ash salt. It's designed for once-a-month use, aligning your self-care with the rhythms of the natural world. This isn't about superstition. It's about rhythm.",
    ritualUsage: "On or near the full moon, prepare a bath with Full Moon salt. Light a single candle. Soak for thirty minutes. Afterward, write down one thing you're ready to let go of.",
    packagingStory: "Sealed in a matte black recycled glass jar with a linen drawstring bag for storage after opening.",
    category: "bath-ritual",
    sizes: [
      { label: "Single Ritual", weight: "300g", price: 28.00 },
      { label: "Three Moons", weight: "900g", price: 72.00 },
    ],
    tags: ["ritual", "monthly", "mineral-dense"],
    inStock: true,
    image: productBathSalt,
  },
  {
    id: "clear-space-reset-salt",
    name: "Clear Space Reset Salt",
    shortDescription: "Sage-blended salt for refreshing rooms and clearing stale energy.",
    longDescription: "Clear Space is our answer to the smoke-heavy space clearing traditions. This blend of coarse salt and dried sage can be placed in corners of rooms, near doors, or on shelves. It absorbs what feels stagnant and brings a sense of reset without burning anything.",
    ritualUsage: "Place small bowls of Clear Space in the four corners of any room that feels heavy or stale. Leave for 48 hours, then discard the salt outdoors on bare earth.",
    packagingStory: "Comes in a hand-woven palm leaf basket with a fitted lid — designed to sit beautifully on any surface while doing its quiet work.",
    category: "space-reset",
    sizes: [
      { label: "Room Kit", weight: "500g", price: 26.00 },
      { label: "Home Kit", weight: "1.2kg", price: 52.00 },
    ],
    tags: ["sage", "space-clearing", "smoke-free"],
    inStock: true,
    image: productSpaceSalt,
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
    sizes: [
      { label: "Standard", weight: "400g", price: 24.00 },
      { label: "Moving Day", weight: "1kg", price: 48.00 },
    ],
    tags: ["eucalyptus", "new-beginnings", "transition"],
    inStock: true,
    image: productSpaceSalt,
  },
  {
    id: "the-grounding-set",
    name: "The Grounding Set",
    shortDescription: "A curated trio of salts for daily, weekly, and monthly rituals.",
    longDescription: "The Grounding Set brings together Pure Earth (daily), Evening Calm (weekly), and Full Moon (monthly) in one beautifully arranged gift box. It's a complete introduction to Mo Saints and a thoughtful gift for anyone beginning their grounding journey.",
    ritualUsage: "Follow the included ritual card: Pure Earth for everyday grounding, Evening Calm for your weekly unwind bath, and Full Moon for your monthly moment of reflection.",
    packagingStory: "Presented in a hand-crafted wooden box with woven grass dividers. Each salt is individually wrapped in unbleached cotton. Includes a printed ritual guide on recycled card stock.",
    category: "gift-sets",
    sizes: [
      { label: "Complete Set", weight: "1.1kg", price: 68.00 },
    ],
    tags: ["gift", "starter", "complete"],
    inStock: true,
    image: productGiftSet,
    featured: true,
  },
  {
    id: "the-ritual-starter",
    name: "The Ritual Starter",
    shortDescription: "Two essential salts and a wooden scoop for your first Mo Saints experience.",
    longDescription: "The Ritual Starter pairs our Pure Earth Rock Salt with Clear Space Reset Salt, plus a hand-carved wooden scoop. It's the simplest way to bring Mo Saints into your home — no commitment, just curiosity.",
    ritualUsage: "Start with Clear Space to refresh your environment, then use Pure Earth for daily grounding. The wooden scoop is your ritual tool — keep it with your salts.",
    packagingStory: "Wrapped in a natural fiber sleeve with a hand-tied cotton ribbon. Compact and gift-ready without excess packaging.",
    category: "gift-sets",
    sizes: [
      { label: "Starter Kit", weight: "700g", price: 44.00 },
    ],
    tags: ["gift", "beginner", "essential"],
    inStock: true,
    image: productGiftSet,
  },
  {
    id: "the-complete-collection",
    name: "The Complete Collection",
    shortDescription: "Every Mo Saints salt in one heirloom-quality woven basket.",
    longDescription: "For the deeply committed or the generous gift-giver. The Complete Collection includes all six Mo Saints salts, a wooden scoop, a linen bath cloth, and our printed ritual guide. It's everything, together, in one place.",
    ritualUsage: "Explore each salt at your own pace. The included guide suggests a 30-day introduction to all six, but there's no wrong way to begin.",
    packagingStory: "Housed in a large hand-woven seagrass basket with a fitted lid. The basket is meant to stay — as storage, as decor, as a reminder that beautiful things can also be useful.",
    category: "gift-sets",
    sizes: [
      { label: "Full Collection", weight: "3.2kg", price: 148.00 },
    ],
    tags: ["gift", "luxury", "complete"],
    inStock: false,
    image: productGiftSet,
  },
  {
    id: "woven-salt-sack",
    name: "Woven Salt Sack",
    shortDescription: "A hand-woven jute storage sack for your Mo Saints salts.",
    longDescription: "Our signature woven sack, made by hand from natural jute fiber. Use it to store your salt, carry it when traveling, or hang it in your bathroom as part of your ritual space. Each one is slightly different — that's not a flaw, it's a signature.",
    ritualUsage: "Keep your favorite salt in this sack and hang it near your bath or shower. The natural fibers allow air to circulate, keeping the salt fresh and ready.",
    packagingStory: "Ships flat in a recycled paper envelope. No plastic, no filler, no excess.",
    category: "accessories",
    sizes: [
      { label: "Small", weight: "50g", price: 14.00 },
      { label: "Large", weight: "80g", price: 20.00 },
    ],
    tags: ["storage", "handmade", "jute"],
    inStock: true,
    image: productAccessories,
  },
  {
    id: "wooden-salt-scoop",
    name: "Wooden Salt Scoop",
    shortDescription: "Hand-carved olive wood scoop for measuring and serving salt.",
    longDescription: "Carved from a single piece of olive wood, this scoop is built to last through years of daily use. The wood grain is unique to each piece, and the smooth finish feels warm in the hand. It holds roughly one tablespoon — perfect for bath and ritual use.",
    ritualUsage: "Use the scoop as your dedicated salt tool. Keep it with your primary salt and let it become part of your daily rhythm.",
    packagingStory: "Wrapped in a strip of undyed cotton and tucked into a kraft paper sleeve with a Mo Saints stamp.",
    category: "accessories",
    sizes: [
      { label: "One Scoop", weight: "30g", price: 16.00 },
    ],
    tags: ["handmade", "olive-wood", "tool"],
    inStock: true,
    image: productAccessories,
  },
  {
    id: "ritual-guide-booklet",
    name: "Ritual Guide Booklet",
    shortDescription: "A printed guide to Mo Saints rituals, grounding practices, and salt care.",
    longDescription: "This 32-page booklet is printed on recycled card stock and covers everything from basic salt care to guided rituals for each of our products. It also includes reflections on the Mo Saints philosophy — earth, simplicity, balance — and how to bring that into your everyday life.",
    ritualUsage: "Read it slowly. Pick one ritual to start with. Return to it when you need grounding or inspiration.",
    packagingStory: "Saddle-stitched with a kraft paper cover, stamped with the Mo Saints mark. Designed to be kept, not discarded.",
    category: "accessories",
    sizes: [
      { label: "Booklet", weight: "60g", price: 8.00 },
    ],
    tags: ["guide", "printed", "educational"],
    inStock: true,
    image: productAccessories,
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "rock-salt", label: "Rock Salt" },
  { id: "bath-ritual", label: "Bath Ritual Salts" },
  { id: "space-reset", label: "Space Reset Salt" },
  { id: "gift-sets", label: "Gift Sets" },
  { id: "accessories", label: "Accessories" },
] as const;

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
