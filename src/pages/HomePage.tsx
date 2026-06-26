import { CheckCircle2 } from "lucide-react";
import { ActionLink } from "../components/ActionLink";
import { AnimatedPage } from "../components/AnimatedPage";
import { BusinessCard } from "../components/BusinessCard";
import { FeatureCard } from "../components/FeatureCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";
import {
  audienceSegments,
  brandAssets,
  businessVerticals,
  missionItems,
  stats,
  whyChooseFeatures,
} from "../data/siteContent";

export function HomePage() {
  return (
    <AnimatedPage>
      <PageHero
        eyebrow="Eagle Crown Group of Companies"
        title="Everything is Possible"
        description="Building Businesses. Creating Opportunities. Delivering Growth. Eagle Crown Group of Companies is a diversified business enterprise focused on manufacturing, food innovation, franchise development, and FMCG distribution."
        image={brandAssets.eagle}
        primaryAction={{ label: "Explore Our Businesses", to: "/businesses" }}
        secondaryAction={{ label: "Become a Partner", to: "/partner" }}
        visual={<HomeHeroEagle />}
      >
        <div className="hidden max-w-3xl grid-cols-2 gap-3 sm:grid sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/16 bg-white/10 p-4 backdrop-blur"
            >
              <p className="font-display text-2xl font-semibold text-gold-200">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      <Section className="bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <SectionHeader
              eyebrow="About Eagle Crown"
              title="Building businesses that create value, employment, and opportunity."
              description="We create sustainable business opportunities for entrepreneurs, dealers, distributors, and investors through innovative products and scalable business models. Our businesses span beverage manufacturing, food franchises, and healthy snack products, with a vision to become a trusted name in India and global markets."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/about">Know About Us</ActionLink>
              <ActionLink to="/contact" variant="secondary">
                Contact Us
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {audienceSegments.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-3 rounded-lg border border-slate-200 bg-ivory-50 p-4"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-5 shrink-0 text-green-600"
                    strokeWidth={2}
                  />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ivory-50">
        <SectionHeader
          eyebrow="Our Businesses"
          title="Beverage manufacturing, food franchises, and healthy snack products."
          description="Each business vertical is designed to serve growing demand while creating structured opportunities for entrepreneurs, distributors, franchise partners, and investors."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {businessVerticals.map((vertical, index) => (
            <Reveal key={vertical.name} delay={index * 0.04}>
              <BusinessCard vertical={vertical} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Our Vision"
              title="To become a globally respected business group."
              description="Eagle Crown aims to create innovative products, empower entrepreneurs, and build sustainable business ecosystems across India and international markets."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-lg border border-slate-200 bg-ivory-50 p-6 shadow-sm">
              <p className="eyebrow">Our Mission</p>
              <div className="mt-5 grid gap-4">
                {missionItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-green-600"
                    />
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ivory-50">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-crown-950/10">
              <img
                src={brandAssets.brandPortfolio}
                alt="Eagle Crown brand portfolio with franchise kiosk, beverages, and healthy snacks"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeader
              eyebrow="Our Brands"
              title="Premium products, strong partnerships, sustainable growth."
              description="From premium beverage manufacturing and franchise food concepts to healthy dehydrated snacks, Eagle Crown Group of Companies is building brands designed for long-term success."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["SR Foods", "VegPops", "Fruit Bite"].map((brand) => (
                <div
                  key={brand}
                  className="rounded-lg border border-slate-200 bg-ivory-50 p-5"
                >
                  <p className="font-display text-2xl font-semibold text-crown-900">
                    {brand}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Quality-led food innovation for franchise, retail, and distribution
                    opportunities.
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-crown-950 text-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Franchise. Distribution. Manufacturing. Innovation."
              description="Eagle Crown brings together business planning, product innovation, market-focused franchise solutions, scalable distribution models, and professional operational support."
              className="[&_h2]:text-white [&_p]:text-white/74"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseFeatures.slice(0, 4).map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.04}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[linear-gradient(120deg,#fff8e6_0%,#fffdf8_46%,#eaf8e8_100%)]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="eyebrow">Become a Partner</p>
            <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold text-crown-950 sm:text-5xl">
              Your trusted partner for business expansion and brand growth.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              We welcome growth-focused individuals and organizations interested in
              investment, distribution, franchise, dealership, retail, and corporate
              collaboration opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink to="/partner">Partner With Us</ActionLink>
              <ActionLink to="/contact" variant="secondary">
                Contact Eagle Crown
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </AnimatedPage>
  );
}

function HomeHeroEagle() {
  return (
    <div className="home-eagle-scene" aria-hidden="true">
      <div className="home-eagle-orbit home-eagle-orbit-one" />
      <div className="home-eagle-orbit home-eagle-orbit-two" />
      <div className="home-eagle-card">
        <div className="home-eagle-glow" />
        <img
          src={brandAssets.logoMark}
          alt=""
          loading="eager"
          decoding="async"
          className="home-eagle-mark"
        />
      </div>
      <div className="home-eagle-plinth">
        <span>Growth</span>
        <span>Franchise</span>
        <span>Distribution</span>
      </div>
    </div>
  );
}
