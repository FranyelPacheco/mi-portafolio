import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseHeroAnimationReturn {
  containerRef: React.RefObject<HTMLElement | null>;
}

// Orquesta el timeline de entrada cinematográfico del Hero monumental:
// 1. Aura de luz ambiental (backlight halo) creciendo con blur
// 2. Titular monumental con reveal staggered desde abajo (clip vertical)
// 3. Retrato de estudio con viñeta emergiendo con escala sutil
// 4. Metadata editorial en las esquinas
// 5. CTAs magnéticos y scroll indicator
export const useHeroAnimation = (): UseHeroAnimationReturn => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      const el = containerRef.current;
      if (!el) return;
      el.querySelectorAll("[data-hero]").forEach((node) => {
        (node as HTMLElement).style.opacity = "1";
        (node as HTMLElement).style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Halo de iluminación ambiental
      tl.fromTo(
        "[data-hero='aura']",
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }
      )
        // 2. Subtítulo superior
        .fromTo(
          "[data-hero='eyebrow']",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=1.1"
        )
        // 3. Titular monumental (palabras gigantes con reveal clip)
        .fromTo(
          "[data-hero='word']",
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.85, stagger: 0.08 },
          "-=0.7"
        )
        // 4. Retrato con iluminación de estudio
        .fromTo(
          "[data-hero='portrait']",
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power2.out" },
          "-=0.6"
        )
        // 5. Metadata de esquinas
        .fromTo(
          "[data-hero='meta']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.6"
        )
        // 6. Botones de acción
        .fromTo(
          "[data-hero='cta']",
          { opacity: 0, y: 10, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
          "-=0.4"
        )
        // 7. Scroll indicator
        .fromTo(
          "[data-hero='scroll-indicator']",
          { opacity: 0, height: 0 },
          { opacity: 1, height: "3rem", duration: 0.7 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef };
};
