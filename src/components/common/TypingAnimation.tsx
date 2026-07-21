import { useState, useEffect } from "react";

interface TypingAnimationProps {
  children: string;
  speed?: number;
  className?: string;
}

const TypingAnimation = ({
  children,
  speed = 80,
  className = "",
}: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= children.length) {
        setDisplayText(children.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span
        className={`inline-block w-[3px] h-[1em] bg-sky-400 ml-1 align-middle transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
};

export default TypingAnimation;
