import type { PropsWithChildren, ReactNode } from "react";
import { ActionLink } from "./ActionLink";

type PageHeroProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  visual?: ReactNode;
  compact?: boolean;
}>;

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  visual,
  compact = false,
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-crown-950 text-white ${
        compact ? "py-20 sm:py-24" : "min-h-[calc(100svh-10rem)] py-14 sm:py-18 lg:py-20"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-44 mix-blend-luminosity motion-safe:animate-hero-drift"
        />
      ) : null}
      <div className="absolute inset-0 z-10 bg-crown-950/85" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(105deg,rgba(29,22,15,0.98)_0%,rgba(55,34,18,0.9)_46%,rgba(15,36,24,0.74)_100%)]" />
      <div className="hero-pattern absolute inset-0 z-10 opacity-55" />
      <div className="hero-depth absolute right-[-8rem] top-20 z-10 hidden h-80 w-80 rounded-full border border-gold-300/25 lg:block" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-crown-950/85 to-transparent" />

      <div
        className={`relative z-20 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:px-8 ${
          visual && !compact ? "lg:grid-cols-[0.92fr_0.88fr]" : ""
        }`}
      >
        <div className="max-w-3xl py-6">
          {eyebrow ? <p className="eyebrow text-gold-200">{eyebrow}</p> : null}
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/82 sm:text-xl">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction ? (
                <ActionLink to={primaryAction.to}>{primaryAction.label}</ActionLink>
              ) : null}
              {secondaryAction ? (
                <ActionLink to={secondaryAction.to} variant="light">
                  {secondaryAction.label}
                </ActionLink>
              ) : null}
            </div>
          )}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
        {visual && !compact ? (
          <div className="hidden min-w-0 justify-self-end lg:block">{visual}</div>
        ) : null}
      </div>
    </section>
  );
}
