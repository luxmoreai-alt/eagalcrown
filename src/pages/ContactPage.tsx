import { Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedPage } from "../components/AnimatedPage";
import { InquiryForm } from "../components/InquiryForm";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Section, SectionHeader } from "../components/Section";
import { brandAssets } from "../data/siteContent";

const officeAddress =
  "Karuna Conclave, Door No 45, 2nd Floor, Ad Block, Shanthi Colony, Anna Nagar, Chennai 40, Chennai-600040";

const contactReasons = [
  "Franchise Enquiries",
  "Dealership Opportunities",
  "Distribution Partnerships",
  "Product Business Enquiries",
  "Investor Discussions",
  "Corporate Collaborations",
];

export function ContactPage() {
  return (
    <AnimatedPage>
      <PageHero
        compact
        eyebrow="Contact Us"
        title="For business opportunities, contact our team today."
        description="For franchise opportunities, dealership enquiries, distribution partnerships, or business collaborations, connect with Eagle Crown Group of Companies in Chennai."
        image={brandAssets.eagle}
      />

      <Section className="bg-white">
        <div className="grid gap-10 items-stretch lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Eagle Crown Group of Companies"
              title="Everything is Possible"
              description="Share your business interest and our team can route your enquiry toward franchise opportunities, dealership enquiries, distribution partnerships, or business collaborations."
            />
            <div className="mt-8 grid gap-4">
              <InfoLine icon={MessageCircle} title="WhatsApp & Phone" text="+91 96003 15007 for franchise, dealer, distributor, investor, and corporate enquiries." />
              <InfoLine icon={Mail} title="Partnership Requests" text="Submit the form and your details will open directly in WhatsApp for a faster response." />
              <InfoLine icon={MapPin} title="Office Address" text={officeAddress} />
              <InfoLine icon={Sparkles} title="Growth Focus" text="Building businesses, creating opportunities, delivering growth." />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <InquiryForm />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ivory-50">
        <SectionHeader
          eyebrow="Contact For"
          title="The right starting point for every business conversation."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactReasons.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="rounded-lg border border-slate-200 bg-white p-6 text-center font-semibold text-slate-800 shadow-sm">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </AnimatedPage>
  );
}

type InfoLineProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

function InfoLine({ icon: Icon, title, text }: InfoLineProps) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-200 bg-ivory-50 p-5">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <div>
        <h3 className="font-semibold text-crown-900">{title}</h3>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}
