import type { ReactNode } from "react";

export interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ShimmerButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ShimmerButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#CCFF00] hover:bg-[#B8E600] text-[#121212] font-semibold text-sm tracking-tight border border-[#CCFF00] btn-press focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CCFF00] disabled:opacity-40 disabled:pointer-events-none cursor-pointer ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ShimmerButton;
