import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  style?: CSSProperties;
  [key: `data-${string}`]: string | undefined;
}

// Efecto magnético: el botón sigue sutilmente el cursor en hover.
// Transform CSS + transición ease-out = interruptible sin cancelar la animación.
// Desplazamiento máximo ±8px para no resultar exagerado.
export const MagneticButton = ({
  children,
  className = "",
  onClick,
  href,
  download,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
  style,
  ...dataAttrs
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.18;
    const dy = (e.clientY - cy) * 0.18;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `magnetic ${className}`,
    "aria-label": ariaLabel,
    style,
    ...dataAttrs,
  };

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...sharedProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    >
      {children}
    </button>
  );
};
