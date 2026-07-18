import * as React from "react";
import { cn } from "@/lib/utils";

type Bg = "white" | "surface" | "brand";

const bgClasses: Record<Bg, string> = {
  white: "bg-white",
  surface: "bg-[var(--color-surface)]",
  // Azul corporativo solido — el mismo tono que header y footer, sin degradado.
  brand: "bg-[var(--color-primary)] text-white",
};

type Spacing = "lg" | "default" | "sm";

const spacingClasses: Record<Spacing, string> = {
  lg: "py-[var(--space-section-lg)]",
  default: "py-[var(--space-section)]",
  sm: "py-[var(--space-section-sm)]",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: Bg;
  /** lg = momento protagonico (Hero, Productos), sm = beat rapido (Beneficios) */
  spacing?: Spacing;
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
      <div className={cn("container", spacingClasses[spacing], containerClassName)}>
        {children}
      </div>
    </section>
  );
}
