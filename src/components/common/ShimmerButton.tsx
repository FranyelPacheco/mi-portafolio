import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ShimmerButton = ({ children, className = "", onClick }: ShimmerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-slate-900 font-semibold rounded-lg shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5 overflow-hidden ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 z-0 shimmer-effect" />
    </button>
  );
};

export default ShimmerButton;
