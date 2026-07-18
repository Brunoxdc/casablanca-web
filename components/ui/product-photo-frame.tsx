import Image from "next/image";
import { cn } from "@/lib/utils";

type Aspect = "square" | "portrait" | "landscape" | "hero";

const aspectClasses: Record<Aspect, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  hero: "aspect-[5/4]",
};

interface ProductPhotoFrameProps {
  src: string;
  alt: string;
  aspect?: Aspect;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Aplica un zoom sutil a la imagen cuando el ancestro `.group` recibe hover. */
  zoomOnHover?: boolean;
}

/**
 * Marco fotográfico consistente: mismo fondo de "estudio", mismo radio y
 * misma sombra para cualquier foto de producto. Al reemplazar `src` por una
 * fotografía profesional real, el resultado se mantiene visualmente
 * uniforme sin tocar el layout.
 */
export function ProductPhotoFrame({
  src,
  alt,
  aspect = "landscape",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  zoomOnHover = false,
}: ProductPhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]",
        "bg-[radial-gradient(circle_at_30%_20%,#ffffff_0%,var(--color-surface)_55%,var(--color-surface-alt)_100%)]",
        aspectClasses[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-contain p-6 sm:p-10 transition-transform duration-[420ms] ease-[var(--ease)]",
          zoomOnHover && "group-hover:scale-[1.06]"
        )}
      />
    </div>
  );
}
