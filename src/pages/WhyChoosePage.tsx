import { AnimatedPage } from "../components/AnimatedPage";
import { FeatureCard } from "../components/FeatureCard";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";
import { brandAssets, whyChooseFeatures } from "../data/siteContent";

export function WhyChoosePage() {
  return (
    <AnimatedPage>
      <PageHero
        compact
        eyebrow="Why Choose Eagle Crown"
        title="Business models built for quality, support, and long-term growth."
        description="The group combines diversified business expertise, innovative food and beverage concepts, scalable franchise models, and professional support for partners."
        image={brandAssets.eagle}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Our Advantage"
          title="A stronger ecosystem for entrepreneurs, dealers, distributors, and investors."
          description="Eagle Crown's approach is designed to support growth from product development to market expansion, franchise operations, and channel partnerships."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.04}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[linear-gradient(120deg,#fff8e6,#fffdf8,#effaf0)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Final Brand Message</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-crown-950 sm:text-5xl">
            Business growth begins with vision, innovation, and trusted partnerships.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Through a diversified model and commitment to quality, Eagle Crown aims
            to create meaningful opportunities for entrepreneurs, customers, and
            partners across India and beyond.
          </p>
        </div>
      </Section>
    </AnimatedPage>
  );
}
