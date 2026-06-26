import { brandAssets } from "../data/siteContent";

type BrandLogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function BrandLogo({ compact = false, inverted = false }: BrandLogoProps) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gold-300 bg-white shadow-sm sm:size-14">
        <img
          src={brandAssets.logoMark}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </span>
      <span className="min-w-0">
        <span
          className={`block truncate font-display text-lg font-semibold leading-tight ${
            inverted ? "text-white" : "text-crown-950"
          }`}
        >
          Eagle Crown
        </span>
        {!compact ? (
          <span className="block truncate text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-700">
            Group of Companies
          </span>
        ) : null}
      </span>
    </div>
  );
}
