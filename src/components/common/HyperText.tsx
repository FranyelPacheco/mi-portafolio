import { useState, useEffect, useRef } from "react";

interface HyperTextProps {
  children: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const HyperText = ({ children, className = "" }: HyperTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      const maxIterations = children.length * 3;

      intervalRef.current = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration / 3) return children[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration++;
        if (iteration >= maxIterations) {
          setDisplayText(children);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 30);
    } else {
      setDisplayText(children);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, children]);

  return (
    <span
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-colors duration-100 ${
            isHovered && char !== " "
              ? "text-sky-400"
              : ""
          }`}
          style={{ animationDelay: `${index * 0.02}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default HyperText;
