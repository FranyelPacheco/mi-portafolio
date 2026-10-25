import { useState, useEffect } from "react";

export interface TypingAnimationProps {
  children: string;
  speed?: number;
  className?: string;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TypingAnimation = ({
  children,
  speed = 45,
  className = "",
}: TypingAnimationProps) => {
  const [charCount, setCharCount] = useState<number>(() =>
    prefersReducedMotion() ? children.length : 0
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setCharCount(index);
      if (index >= children.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  const isTyping = charCount < children.length;

  return (
    <span className={`inline-block ${className}`}>
      {children.slice(0, charCount)}
      {isTyping && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[0.9em] bg-[#CCFF00] ml-1 align-middle"
        />
      )}
    </span>
  );
};

export default TypingAnimation;
