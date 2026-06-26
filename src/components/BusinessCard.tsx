import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BusinessVertical } from "../data/siteContent";
import { cn } from "../lib/classNames";

const accentBorder = {
  gold: "hover:border-gold-300",
  green: "hover:border-green-300",
  orange: "hover:border-orange-300",
  burgundy: "hover:border-burgundy-300",
};

const accentIcon = {
  gold: "bg-gold-100 text-gold-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
  burgundy: "bg-burgundy-100 text-burgundy-700",
};

type BusinessCardProps = {
  vertical: BusinessVertical;
};

export function BusinessCard({ vertical }: BusinessCardProps) {
  const Icon = vertical.icon;

  return (
    <Link
      to={vertical.path}
      className={cn(
        "group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:shadow-2xl hover:shadow-crown-950/14",
        "professional-card perspective-card relative overflow-hidden",
        accentBorder[vertical.accent],
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            "transition duration-300 group-hover:scale-110 group-hover:shadow-lg",
            accentIcon[vertical.accent],
          )}
        >
          <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
        </div>
        <ArrowRight
          aria-hidden="true"
          className="mt-2 size-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-gold-600"
        />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
        {vertical.eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-crown-950">{vertical.name}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{vertical.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {vertical.highlights.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-full bg-ivory-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
