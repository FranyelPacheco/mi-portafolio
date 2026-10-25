import { ArrowUpRight } from "lucide-react";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/FranyelPacheco",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/franyel-franyel/",
    external: true,
  },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.impostor.royale",
    external: true,
  },
  {
    label: "Currículum (PDF)",
    href: "/CV.pdf",
    external: false,
    download: true,
  },
] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[var(--text-primary)] font-semibold uppercase tracking-wider">
            Franyel Pacheco
          </span>
          <span className="opacity-40">/</span>
          <span className="tabular-nums text-[var(--text-secondary)]">{currentYear}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {LINKS.map(({ label, href, external, ...rest }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              {...("download" in rest ? { download: rest.download } : {})}
              className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-white transition-colors duration-150 uppercase tracking-wider min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {label}
              {external && (
                <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
