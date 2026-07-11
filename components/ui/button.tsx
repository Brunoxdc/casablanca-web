import * as React from "react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--cb-teal-700)] text-white hover:bg-[var(--cb-teal-800)]",
  outline:
    "border-2 border-[var(--cb-teal-700)] text-[var(--cb-teal-700)] hover:bg-[var(--cb-teal-50)]",
  ghost: "text-[var(--cb-teal-700)] hover:bg-[var(--cb-teal-50)]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";