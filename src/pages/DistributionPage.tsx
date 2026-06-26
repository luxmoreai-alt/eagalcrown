import { CheckCircle2, MapPinned, Truck } from "lucide-react";
import { ActionLink } from "../components/ActionLink";
import { AnimatedPage } from "../components/AnimatedPage";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";
import {
  brandAssets,
  distributionOpportunities,
  partnerSupport,
} from "../data/siteContent";

export function DistributionPage() {
  return (
    <AnimatedPage>
      <PageHero
        compact
        eyebrow="Distribution Network"
        title="We invite business partners across India."
        description="Eagle Crown Group of Companies welcomes super stockists, state distributors, dealers, sub dealers, retailers, and franchise partners for scalable distribution opportunities."
        image={brandAssets.foods}
        primaryAction={{ label: "Become a Channel Partner", to: "/partner" }}
      />

      <Section className="bg-white">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <div className="flex size-14 items-center justify-center rounded-full bg-green-100 text-green-700 ring-1 ring-green-200">
              <Truck aria-hidden="true" className="size-7" strokeWidth={1.8} />
            </div>
            <SectionHeader
              className="mt-6"
              eyebrow="Business Opportunities"
              title="Open opportunities for experienced and growth-oriented partners."
              description="We provide comprehensive support to help our partners grow successfully across local, regional, and national markets."
            />
            <div className="mt-8">
              <ActionLink to="/contact">Start Enquiry</ActionLink>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {distributionOpportunities.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex min-h-24 items-center gap-4 rounded-lg border border-slate-200 bg-ivory-50 p-5">
                  <MapPinned aria-hidden="true" className="size-6 shrink-0 text-gold-600" />
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ivory-50">
        <SectionHeader
          eyebrow="Partner Support"
          title="Comprehensive support to help channel partners grow."
          description="Our distribution network is designed for long-term business relationships with guidance, marketing support, sales development assistance, and distribution planning."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnerSupport.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="flex h-full gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-green-600" />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </AnimatedPage>
  );
}
