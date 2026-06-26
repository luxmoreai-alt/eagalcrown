import { PropsWithChildren } from "react";
import { cn } from "../lib/classNames";

type SectionProps = PropsWithChildren<{
  className?: string;
  innerClassName?: string;
  id?: string;
}>;

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function Section({ children, className, innerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("section-band", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-crown-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-8 text-slate-700 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
