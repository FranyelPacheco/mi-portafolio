const TECHS = ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML", "CSS"];
// Dos vueltas por copia para que la banda cubra pantallas anchas sin huecos
const ROW = [...TECHS, ...TECHS];

export const TechMarquee = () => (
  <section aria-label="Tecnologías que uso" className="marquee py-6 border-y border-[var(--border-subtle)] bg-white/[0.01]">
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center gap-3 pr-3 list-none m-0 p-0" aria-hidden={copy === 1}>
          {ROW.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] font-mono text-xs sm:text-sm text-[var(--text-secondary)] whitespace-nowrap"
            >
              {t}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default TechMarquee;
