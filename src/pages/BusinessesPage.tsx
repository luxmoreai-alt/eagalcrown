import {
  Apple,
  CheckCircle2,
  Coffee,
  Factory,
  Leaf,
  PackageCheck,
  Store,
  Utensils,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ActionLink } from "../components/ActionLink";
import { AnimatedPage } from "../components/AnimatedPage";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";

const businessMedia = {
  video: "/assets/business/business-launch.mp4",
  rockyKing: "/assets/business/rocky-king-rum.jpeg",
  royalElegance: "/assets/business/royal-elegance-whisky.jpeg",
  caribbeanNights: "/assets/business/caribbean-nights-rum.jpeg",
  solDeGoa: "/assets/business/sol-de-goa-fenny.jpeg",
  mahuva: "/assets/business/mahuva-spirit.jpeg",
  cashewFenny: "/assets/business/cashew-fenny.jpeg",
  aramane: "/assets/business/aramane-malt-whisky.jpeg",
  srFoodsKiosk: "/assets/business/sr-foods-franchise-kiosk-optimized.jpg",
  oneBiteSnacks: "/assets/business/one-bite-snacks-display-optimized.jpg",
  vegPopsSnacks: "/assets/business/vegpops-vegetable-snacks-optimized.jpg",
  fruitBiteSnacks: "/assets/business/fruit-bite-fruit-snacks-optimized.jpg",
};

const galleryImages = [
  { src: businessMedia.royalElegance, alt: "Royal Elegance Gold barrel whisky bottle" },
  { src: businessMedia.rockyKing, alt: "Rocky King reserve rum bottle" },
  { src: businessMedia.caribbeanNights, alt: "Caribbean Nights rum bottle" },
  { src: businessMedia.solDeGoa, alt: "Sol de Goa purified fenny bottle" },
  { src: businessMedia.cashewFenny, alt: "Charmys cashew fenny bottle" },
  { src: businessMedia.aramane, alt: "Aramane fine malt whisky bottle" },
  { src: businessMedia.mahuva, alt: "Charmys Mahuva spirit bottle" },
];

const businessBriefs = [
  {
    title: "Distillery Manufacturing",
    description:
      "A modern Goa-based distillery facility for premium brandy, whiskey, rum, vodka, and fenny with strong quality and compliance standards.",
    icon: Factory,
  },
  {
    title: "SR Foods",
    description:
      "An innovative food franchise division for aspiring entrepreneurs with complete cart-based and kiosk-based business solutions.",
    icon: Store,
  },
  {
    title: "One Bite",
    description:
      "A unique bite-sized fast food concept offering mini snacks, quick service, and an affordable investment model.",
    icon: Utensils,
  },
  {
    title: "VegPops",
    description:
      "Healthy dehydrated vegetable snacks made from selected vegetables while retaining natural taste and nutritional value.",
    icon: Leaf,
  },
  {
    title: "Fruit Bite",
    description:
      "Premium dehydrated fruit snacks prepared to preserve natural flavor while offering convenient, healthy snacking.",
    icon: Apple,
  },
];

const beveragePortfolio = ["Brandy", "Whiskey", "Rum", "Vodka", "Fenny"];

const manufacturingStandards = [
  "Modern production technology",
  "Premium-quality products",
  "Quality and safety standards",
  "Applicable legal and regulatory compliance",
  "Long-term brand development",
];

const franchiseSupport = [
  "Business setup",
  "Branded food cart",
  "Menu development",
  "Centralized product supply",
  "Training",
  "Marketing support",
  "Operational guidance",
];

const oneBiteMenu = [
  {
    name: "Mini Burgers",
    description: "Freshly prepared bite-sized burgers with premium fillings.",
  },
  {
    name: "Mini Pizza Bites",
    description: "Crispy, cheesy pizza bites in exciting flavours.",
  },
  {
    name: "Mini Korean Cheese Bun",
    description: "Soft buns filled with rich Korean-style cheese.",
  },
  {
    name: "Mini Bomboloni",
    description: "Italian-style filled doughnuts available in multiple flavours.",
  },
  {
    name: "Beverages",
    description: "Tea, coffee, fresh juices, and refreshing drinks.",
  },
];

const vegPopsRange = ["Beetroot", "Carrot", "Okra", "Sweet Potato", "Mixed Vegetable Snacks"];
const fruitBiteRange = ["Apple", "Mango", "Pineapple", "Banana", "Strawberry", "Mixed Fruit Snacks"];

export function BusinessesPage() {
  return (
    <AnimatedPage>
      <BusinessHero />
      <ProductMarquee />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Business Verticals"
          title="Beverage manufacturing, food franchises, and healthy snack products."
          description="Our businesses span across beverage manufacturing, food franchises, and healthy snack products, with scalable models for entrepreneurs, franchise owners, dealers, distributors, and investors."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {businessBriefs.map((business, index) => (
            <Reveal key={business.title} delay={index * 0.035}>
              <BriefBusinessCard {...business} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="distillery" className="bg-ivory-50">
        <BusinessDetail
          eyebrow="1. Distillery Manufacturing"
          title="A modern distillery manufacturing facility in Goa."
          description="We are establishing a modern distillery manufacturing facility in Goa for the production of premium alcoholic beverages using modern production technology while maintaining high standards of quality, safety, and compliance."
          icon={Wine}
          itemsTitle="Product Portfolio"
          items={beveragePortfolio}
          media={[
            { src: businessMedia.royalElegance, alt: "Royal Elegance Gold barrel whisky bottle" },
            { src: businessMedia.rockyKing, alt: "Rocky King reserve rum bottle" },
            { src: businessMedia.cashewFenny, alt: "Charmys cashew fenny bottle" },
          ]}
          reverse
        >
          <Checklist title="Our Focus" items={manufacturingStandards} />
        </BusinessDetail>
      </Section>

      <Section id="sr-foods" className="bg-white">
        <BusinessDetail
          eyebrow="2. SR Foods"
          title="Innovative food franchise solutions for aspiring entrepreneurs."
          description="SR Foods is our innovative food franchise division designed for aspiring entrepreneurs. We provide complete cart-based and kiosk-based food business solutions."
          icon={Store}
          itemsTitle="Franchise Model"
          items={["Cart-based business", "Kiosk-based business", "Branded setup", "Operational guidance"]}
          media={[
            { src: businessMedia.srFoodsKiosk, alt: "Modern SR Foods franchise kiosk with snacks and beverages" },
            { src: businessMedia.oneBiteSnacks, alt: "Food franchise snack display with mini bites and beverages" },
          ]}
        >
          <Checklist title="Complete Support" items={franchiseSupport} />
        </BusinessDetail>
      </Section>

      <Section id="one-bite" className="bg-crown-950 text-white">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <div className="flex size-14 items-center justify-center rounded-full bg-gold-300 text-crown-950">
              <Utensils aria-hidden="true" className="size-7" />
            </div>
            <p className="eyebrow mt-6 text-gold-200">One Bite</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-5xl">
              A unique bite-sized fast food franchise concept.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              One Bite is designed to deliver high-quality food with quick service
              and an affordable investment model.
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-white/12 bg-white/8">
              <img
                src={businessMedia.oneBiteSnacks}
                alt="One Bite mini snacks and beverages display"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover opacity-90"
              />
            </div>
            <div className="mt-8">
              <ActionLink to="/partner">Start Franchise Discussion</ActionLink>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {oneBiteMenu.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur">
                  <Coffee aria-hidden="true" className="size-6 text-gold-300" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.name}</h3>
                  <p className="mt-3 leading-7 text-white/70">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="vegpops" className="bg-white">
        <BusinessDetail
          eyebrow="3. VegPops"
          title="Healthy snacking made delicious."
          description="VegPops offers dehydrated vegetable snacks made from carefully selected vegetables while retaining their natural taste and nutritional value."
          icon={Leaf}
          itemsTitle="Product Range"
          items={vegPopsRange}
          media={[
            { src: businessMedia.vegPopsSnacks, alt: "VegPops dehydrated vegetable snack range with beetroot, carrot, okra, and sweet potato" },
          ]}
          reverse
        >
          <Checklist
            title="Why VegPops?"
            items={[
              "Beetroot",
              "Carrot",
              "Okra",
              "Sweet Potato",
              "Mixed Vegetable Snacks",
            ]}
          />
        </BusinessDetail>
      </Section>

      <Section id="fruit-bite" className="bg-ivory-50">
        <BusinessDetail
          eyebrow="4. Fruit Bite"
          title="Premium dehydrated fruit snacks."
          description="Prepared using advanced dehydration technology, Fruit Bite preserves natural flavor while offering convenient, healthy snacking."
          icon={PackageCheck}
          itemsTitle="Product Range"
          items={fruitBiteRange}
          media={[
            { src: businessMedia.fruitBiteSnacks, alt: "Fruit Bite dehydrated fruit snack range with apple, mango, pineapple, banana, and strawberry" },
          ]}
        >
          <Checklist
            title="Product Highlights"
            items={[
              "Apple",
              "Mango",
              "Pineapple",
              "Banana",
              "Strawberry",
              "Mixed Fruit Snacks",
            ]}
          />
        </BusinessDetail>
      </Section>
    </AnimatedPage>
  );
}

function BusinessHero() {
  return (
    <section className="relative overflow-hidden bg-crown-950 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        src={businessMedia.video}
        poster={businessMedia.royalElegance}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-crown-950/74" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(29,22,15,0.98)_0%,rgba(57,35,18,0.86)_48%,rgba(12,42,29,0.74)_100%)]" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.92fr_1fr] lg:px-8">
        <div className="min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-none">
          <p className="eyebrow text-gold-200">Our Businesses</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Manufacturing, food franchises, and healthy snacks.
          </h1>
          <p className="mt-6 max-w-[calc(100vw-2rem)] text-base leading-8 text-white/82 sm:max-w-2xl sm:text-xl">
            Eagle Crown builds scalable business opportunities across beverage
            manufacturing, SR Foods, One Bite, VegPops, and Fruit Bite.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink to="/partner">Become a Partner</ActionLink>
            <ActionLink to="/contact" variant="light">
              Contact Us
            </ActionLink>
          </div>
        </div>

        <div className="min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-none">
          <div className="grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-4 self-end">
              <HeroImage src={businessMedia.caribbeanNights} alt="Caribbean Nights rum bottle" />
              <HeroStat value="360" label="Support approach" />
            </div>
            <div className="space-y-4">
              <HeroImage src={businessMedia.royalElegance} alt="Royal Elegance Gold barrel whisky bottle" tall />
              <HeroStat value="India" label="Distribution growth focus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage({ src, alt, tall = false }: { src: string; alt: string; tall?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/14 bg-white/10 shadow-2xl shadow-crown-950/40 backdrop-blur">
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className={`w-full object-cover ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}
      />
    </div>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/14 bg-white/10 p-5 backdrop-blur">
      <p className="font-display text-3xl font-semibold text-gold-200">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
        {label}
      </p>
    </div>
  );
}

function ProductMarquee() {
  const row = [...galleryImages, ...galleryImages];

  return (
    <section className="overflow-hidden bg-crown-950 py-6">
      <div className="business-marquee">
        <div className="business-marquee-track flex gap-4">
          {row.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="h-48 w-40 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/8 sm:h-64 sm:w-52"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BriefBusinessCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-ivory-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:bg-white hover:shadow-xl hover:shadow-crown-950/10">
      <div className="flex size-12 items-center justify-center rounded-full bg-gold-100 text-gold-700 ring-1 ring-gold-200">
        <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-crown-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

type BusinessDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  itemsTitle: string;
  items: string[];
  media: { src: string; alt: string }[];
  reverse?: boolean;
  children: ReactNode;
};

function BusinessDetail({
  eyebrow,
  title,
  description,
  icon: Icon,
  itemsTitle,
  items,
  media,
  reverse = false,
  children,
}: BusinessDetailProps) {
  return (
    <div className={`grid items-start gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal>
        <div className="flex size-14 items-center justify-center rounded-full bg-gold-100 text-gold-700 ring-1 ring-gold-200">
          <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
        </div>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} className="mt-6" />
        <div className="mt-8">
          <MediaMosaic media={media} />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="grid gap-5">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-700">
              {itemsTitle}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-ivory-100 px-4 py-2 text-sm font-semibold text-slate-800 ring-1 ring-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          {children}
        </div>
      </Reveal>
    </div>
  );
}

function MediaMosaic({ media }: { media: { src: string; alt: string }[] }) {
  const [primary, ...secondary] = media;

  return (
    <div className={`grid gap-3 ${secondary.length ? "sm:grid-cols-[1.1fr_0.9fr]" : ""}`}>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <img
          src={primary.src}
          alt={primary.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      {secondary.length ? (
        <div className="grid gap-3">
          {secondary.slice(0, 2).map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-700">{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-green-600" />
            <p className="leading-7 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
