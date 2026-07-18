import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "primary" | "accent" | "neutral";

const toneClasses: Record<Tone, string> = {
  primary: "bg-[var(--color-surface)] text-[var(--color-primary-dark)]",
  accent: "bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]",
  neutral: "bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]",
};

export function Badge({
  tone = "primary",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
