import {
  Apple,
  BadgeCheck,
  Building2,
  Crown,
  Factory,
  Globe2,
  Handshake,
  HeartHandshake,
  Leaf,
  LucideIcon,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Utensils,
  Wine,
} from "lucide-react";

export type NavItem = {
  label: string;
  to: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "gold" | "green" | "orange" | "burgundy";
};

export type BusinessVertical = {
  name: string;
  eyebrow: string;
  summary: string;
  icon: LucideIcon;
  path: string;
  highlights: string[];
  accent: "gold" | "green" | "orange" | "burgundy";
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Businesses", to: "/businesses" },
  { label: "Distribution", to: "/distribution" },
  { label: "Why Us", to: "/why-choose-us" },
  { label: "Partner", to: "/partner" },
  { label: "Contact", to: "/contact" },
];

export const businessVerticals: BusinessVertical[] = [
  {
    name: "Distillery Manufacturing",
    eyebrow: "Premium beverage manufacturing",
    summary:
      "A modern Goa-based distillery facility for premium alcoholic beverages with quality, safety, and compliance at the core.",
    icon: Wine,
    path: "/businesses#distillery",
    highlights: ["Brandy", "Whiskey", "Rum", "Vodka", "Fenny"],
    accent: "gold",
  },
  {
    name: "SR Foods",
    eyebrow: "Franchise business division",
    summary:
      "An innovative food franchise division for aspiring entrepreneurs with cart-based and kiosk-based business solutions.",
    icon: Store,
    path: "/businesses#sr-foods",
    highlights: ["Food carts", "Kiosks", "Training", "Menu planning", "Marketing"],
    accent: "green",
  },
  {
    name: "One Bite",
    eyebrow: "Signature food franchise",
    summary:
      "A bite-sized fast food concept offering mini snacks, quick service, and an affordable franchise investment model.",
    icon: Utensils,
    path: "/businesses#one-bite",
    highlights: ["Mini burgers", "Pizza bites", "Cheese buns", "Bomboloni", "Beverages"],
    accent: "orange",
  },
  {
    name: "VegPops",
    eyebrow: "Vegetable snacks",
    summary:
      "Dehydrated vegetable snacks made from selected vegetables while retaining natural taste and nutritional value.",
    icon: Leaf,
    path: "/businesses#vegpops",
    highlights: ["Beetroot", "Carrot", "Okra", "Sweet potato", "Mixed veg"],
    accent: "green",
  },
  {
    name: "Fruit Bite",
    eyebrow: "Dehydrated fruit snacks",
    summary:
      "Premium dehydrated fruit snacks made to preserve natural flavour while offering convenient, healthy snacking.",
    icon: Apple,
    path: "/businesses#fruit-bite",
    highlights: ["Apple", "Mango", "Pineapple", "Banana", "Strawberry"],
    accent: "burgundy",
  },
];

export const whyChooseFeatures: Feature[] = [
  {
    title: "Diversified business portfolio",
    description:
      "Manufacturing, food service, healthy snacks, FMCG distribution, and franchise development under one group.",
    icon: Building2,
    accent: "gold",
  },
  {
    title: "Innovative business models",
    description:
      "Concepts designed around product quality, operational efficiency, and scalable business opportunities.",
    icon: Sparkles,
    accent: "orange",
  },
  {
    title: "Premium quality products",
    description:
      "A consistent standard for product development, manufacturing systems, and customer-facing experiences.",
    icon: BadgeCheck,
    accent: "green",
  },
  {
    title: "Complete franchise support",
    description:
      "Setup guidance, branded formats, training, product planning, and promotional assistance for partners.",
    icon: HeartHandshake,
    accent: "burgundy",
  },
  {
    title: "Scalable channel network",
    description:
      "A distribution model for super stockists, distributors, dealers, retailers, and franchise partners.",
    icon: Truck,
    accent: "green",
  },
  {
    title: "Professional management",
    description:
      "Experienced leadership focused on structured planning, operations, quality, and long-term value creation.",
    icon: Building2,
    accent: "gold",
  },
  {
    title: "Customer-centric approach",
    description:
      "Products, partnerships, and support systems designed around customer and partner success.",
    icon: HeartHandshake,
    accent: "green",
  },
  {
    title: "Long-term business relationships",
    description:
      "Relationships built around trust, transparency, business guidance, and mutual market growth.",
    icon: Handshake,
    accent: "gold",
  },
];

export const values: Feature[] = [
  {
    title: "Quality first",
    description: "Quality builds trust and long-term success across every vertical.",
    icon: ShieldCheck,
    accent: "gold",
  },
  {
    title: "Innovation",
    description: "New products, new models, and market-relevant business thinking.",
    icon: Sparkles,
    accent: "orange",
  },
  {
    title: "Integrity",
    description: "Ethical business practices remain at the center of the group.",
    icon: BadgeCheck,
    accent: "green",
  },
  {
    title: "Partnership",
    description: "The company grows by helping partners grow with confidence.",
    icon: Handshake,
    accent: "burgundy",
  },
  {
    title: "Sustainability",
    description: "Long-term value creation and responsible growth guide the work.",
    icon: Leaf,
    accent: "green",
  },
];

export const missionItems = [
  "Develop world-class brands.",
  "Support entrepreneurs through profitable franchise models.",
  "Deliver quality products with international standards.",
  "Create employment and business opportunities.",
  "Expand across India and international markets.",
];

export const distributionOpportunities = [
  "Super Stockists",
  "State Distributors",
  "Dealers",
  "Sub Dealers",
  "Retailers",
  "Franchise Partners",
];

export const partnerTypes = [
  "Investors",
  "Franchise Owners",
  "Dealers",
  "Distributors",
  "Retail Partners",
  "Corporate Buyers",
];

export const partnerSupport = [
  "Product and business guidance",
  "Marketing support",
  "Sales development assistance",
  "Distribution planning support",
  "Brand-building opportunities",
  "Long-term relationship focus",
];

export const audienceSegments = [
  "Customers",
  "Franchise owners",
  "Dealers and distributors",
  "Retail partners",
  "Corporate buyers",
  "Investors",
];

export const stats = [
  { value: "5", label: "Business verticals" },
  { value: "360", label: "Partner support approach" },
  { value: "India", label: "Distribution growth focus" },
  { value: "Global", label: "Expansion vision" },
];

export const brandAssets = {
  logo: "/assets/eagle-crown-logo.png",
  logoMark: "/assets/eagle-crown-logo-mark.png",
  eagle: "/assets/eagle-crown-hero-optimized.jpg",
  foods: "/assets/sr-foods-produce-optimized.jpg",
  brandPortfolio: "/assets/business/eagle-crown-brand-portfolio-optimized.jpg",
};

export const businessIconMap = {
  Factory,
  Crown,
  PackageCheck,
  Globe2,
};
