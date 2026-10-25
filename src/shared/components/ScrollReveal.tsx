import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

// Wrapper de reveal on-scroll. Aplica GSAP fromTo sobre el contenedor.
// Soporta prefers-reduced-motion vía CSS (.gsap-reveal tiene opacity:1, transform:none
// cuando el media query está activo, por lo que la animación simplemente no se ve).
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            once,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y, once]);

  return (
    <div ref={ref} className={`gsap-reveal ${className}`}>
      {children}
    </div>
  );
};
