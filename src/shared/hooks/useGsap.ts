import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "./useLenis";

gsap.registerPlugin(ScrollTrigger);

// Sincroniza Lenis con GSAP ScrollTrigger para que los triggers
// se disparen con el scroll suave y no con el scroll nativo del browser
export const useGsapScrollSync = () => {
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, []);
};

// Wrapper conveniente: crea un ScrollTrigger con defaults de alta gama
export const useScrollReveal = (
  targets: string | Element | Element[],
  options?: {
    delay?: number;
    stagger?: number;
    y?: number;
    start?: string;
  }
) => {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: options?.y ?? 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: options?.delay ?? 0,
          stagger: options?.stagger ?? 0,
          scrollTrigger: {
            trigger:
              typeof targets === "string"
                ? (targets as string)
                : (targets as Element),
            start: options?.start ?? "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.current?.revert();
  }, []);
};

export { gsap, ScrollTrigger };
