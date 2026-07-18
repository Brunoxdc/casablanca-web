import * as React from "react";
import { cn } from "@/lib/utils";

type Bg = "white" | "surface" | "gradient" | "dark";

const bgClasses: Record<Bg, string> = {
  white: "bg-white",
  surface: "bg-[var(--color-surface)]",
  gradient:
    "bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-dark)_100%)] text-white",
  dark: "bg-[var(--color-footer-bg)] text-white",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: Bg;
  spacing?: "default" | "sm";
  containerClassName?: string;
}

/** Bloque de sección con ritmo de espaciado y ancho consistentes en todo el sitio. */
export function Section({
  bg = "white",
  spacing = "default",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(bgClasses[bg], className)} {...props}>
      <div
        className={cn(
          "container",
          spacing === "default"
            ? "py-[var(--space-section)]"
            : "py-[var(--space-section-sm)]",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
