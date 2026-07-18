"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "li";
  variant?: "up" | "scale";
  delay?: number;
  className?: string;
}

/** Envuelve contenido y lo revela con un fade suave cuando entra en pantalla. */
export function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = as;

  return (
    <Comp
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        variant === "up" ? "reveal" : "reveal-scale",
        visible && "is-visible",
        className
      )}
    >
      {children}
    </Comp>
  );
}
