import { LucideIcon } from "lucide-react";
import { cn } from "../lib/classNames";

const accentStyles = {
  gold: "bg-gold-100 text-gold-700 ring-gold-200",
  green: "bg-green-100 text-green-700 ring-green-200",
  orange: "bg-orange-100 text-orange-700 ring-orange-200",
  burgundy: "bg-burgundy-100 text-burgundy-700 ring-burgundy-200",
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: keyof typeof accentStyles;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  accent = "gold",
}: FeatureCardProps) {
  return (
    <article className="professional-card perspective-card group relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:border-gold-300 hover:shadow-2xl hover:shadow-gold-950/14">
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-full ring-1 transition duration-300 group-hover:scale-110 group-hover:shadow-lg",
          accentStyles[accent],
        )}
      >
        <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-crown-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
