import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/classNames";

type ActionLinkProps = {
  to: string;
  children: string;
  variant?: "primary" | "secondary" | "light";
};

export function ActionLink({ to, children, variant = "primary" }: ActionLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-sm transition",
        variant === "primary" &&
          "bg-gold-500 text-crown-950 shadow-gold-950/20 hover:bg-gold-400",
        variant === "secondary" &&
          "border border-crown-200 bg-white text-crown-950 hover:border-gold-400 hover:bg-gold-50",
        variant === "light" &&
          "border border-white/30 bg-white/12 text-white backdrop-blur hover:bg-white/20",
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
    </Link>
  );
}
