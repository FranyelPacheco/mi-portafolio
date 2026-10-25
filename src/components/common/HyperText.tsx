import { useState, useEffect, useRef } from "react";

export interface HyperTextProps {
  children: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const HyperText = ({ children, className = "" }: HyperTextProps) => {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    const maxIterations = children.length * 2;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        children
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 2) return children[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration >= maxIterations) {
        setDisplayText(children);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 25);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(children);
  };

  return (
    <span
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default HyperText;
