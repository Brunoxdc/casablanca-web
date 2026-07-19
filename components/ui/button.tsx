import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  // Verde: reservado para acciones (cotizar, enviar, whatsapp)
  primary:
    "bg-[var(--color-accent)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--color-accent-dark)] hover:shadow-[var(--shadow-md)]",
  // Teal: jerarquía / navegación secundaria con peso visual
  secondary:
    "bg-[var(--color-primary)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--color-primary-dark)] hover:shadow-[var(--shadow-md)]",
  outline:
    "border-2 border-[var(--color-text)]/15 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)]",
  ghost:
    "text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold transition-all duration-[var(--transition-duration)] ease-[var(--ease)] disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
