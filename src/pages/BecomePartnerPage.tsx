import { CheckCircle2, Handshake } from "lucide-react";
import { AnimatedPage } from "../components/AnimatedPage";
import { InquiryForm } from "../components/InquiryForm";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";
import { brandAssets, partnerTypes } from "../data/siteContent";

const reasons = [
  "Multiple business opportunities under one group",
  "Trusted business partner approach",
  "Scalable business models",
  "Long-term business relationships",
  "Professional business support",
  "Focus on quality and growth",
];

export function BecomePartnerPage() {
  return (
    <AnimatedPage>
      <PageHero
        compact
        eyebrow="Become a Partner"
        title="Join Eagle Crown Group of Companies and grow with a trusted business partner."
        description="We welcome investors, franchise owners, dealers, distributors, retail partners, and corporate buyers for franchise, dealership, distribution, and business collaboration opportunities."
        image={brandAssets.eagle}
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <div className="flex size-14 items-center justify-center rounded-full bg-gold-100 text-gold-700 ring-1 ring-gold-200">
              <Handshake aria-hidden="true" className="size-7" />
            </div>
            <SectionHeader
              className="mt-6"
              eyebrow="We Invite"
              title="Structured opportunities for investors, franchise owners, dealers, and distributors."
              description="Whether you want to invest, launch a franchise, become a dealer or distributor, or collaborate as a retail or corporate partner, Eagle Crown offers opportunities designed around quality, support, and long-term growth."
            />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {partnerTypes.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex min-h-20 items-center gap-3 rounded-lg border border-slate-200 bg-ivory-50 p-4">
                  <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-green-600" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ivory-50">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Why Partner With Us?"
              title="A business relationship built for market growth."
              description="Join Eagle Crown Group of Companies and grow with a trusted business partner focused on manufacturing, food innovation, franchise development, and FMCG distribution."
            />
            <div className="mt-7 grid gap-3">
              {reasons.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-600" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <InquiryForm />
          </Reveal>
        </div>
      </Section>
    </AnimatedPage>
  );
}
