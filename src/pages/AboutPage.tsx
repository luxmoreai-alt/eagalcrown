import { CheckCircle2 } from "lucide-react";
import { AnimatedPage } from "../components/AnimatedPage";
import { FeatureCard } from "../components/FeatureCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";
import { brandAssets, missionItems, values } from "../data/siteContent";

const capabilities = [
  "Innovation and product development",
  "Quality-focused operations",
  "Ethical business practices",
  "Experienced management",
  "Long-term partner value creation",
];

const sectors = [
  "Distillery Manufacturing",
  "Food Franchise Development",
  "Healthy Snack Products",
  "FMCG Distribution and Channel Expansion",
];

export function AboutPage() {
  return (
    <AnimatedPage>
      <PageHero
        compact
        eyebrow="About Us"
        title="Committed to excellence through innovation, quality, and ethical business practices."
        description="Eagle Crown Group of Companies focuses on manufacturing, food services, healthy snack products, and distribution networks through multiple business verticals."
        image={brandAssets.eagle}
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Who We Are"
              title="Developing opportunities that create long-term value."
              description="Our experienced management team continuously develops new business opportunities that generate long-term value for customers, business partners, dealers, distributors, and franchise owners."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-ivory-50 p-4"
                >
                  <CheckCircle2 aria-hidden="true" className="size-5 text-gold-600" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ivory-50">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title="Multiple sectors, one quality-led business system."
              description="With multiple business verticals, we focus on manufacturing, food services, healthy snack products, and distribution networks."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((sector, index) => (
              <Reveal key={sector} delay={index * 0.04}>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-display text-2xl font-semibold text-crown-900">
                    {sector}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Core Values"
          title="The principles behind every vertical."
          description="Quality, innovation, integrity, partnership, and sustainability guide how Eagle Crown develops products, partners, brands, and business opportunities."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.04}>
              <FeatureCard {...value} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-crown-950 text-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Vision"
              title="To become a globally respected business group."
              description="Our vision is to become a globally respected business group by creating innovative products, empowering entrepreneurs, and building sustainable business ecosystems."
              className="[&_h2]:text-white [&_p]:text-white/74"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur">
              <p className="eyebrow text-gold-200">Mission</p>
              <div className="mt-5 grid gap-4">
                {missionItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-gold-300"
                    />
                    <p className="leading-7 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </AnimatedPage>
  );
}
