import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** Usar sobre fondos oscuros o degradados */
  inverted?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  inverted = false,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            inverted && "!text-white/80"
          )}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "mt-3 text-[1.9rem] sm:text-[2.3rem] font-bold leading-[1.15] tracking-tight",
          inverted ? "text-white" : "text-[var(--color-text)]"
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-[16px] leading-relaxed",
            inverted ? "text-white/80" : "text-[var(--color-text-muted)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
