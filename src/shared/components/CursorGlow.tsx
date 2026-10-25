import { useEffect, useRef } from "react";

// Resplandor azul que sigue al cursor; solo en dispositivos con mouse y sin reduced-motion
export const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let x = 0, y = 0, raf = 0;
    const draw = () => {
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      raf = 0;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(draw);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-500"
      style={{ background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)", willChange: "transform" }}
    />
  );
};
