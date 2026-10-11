import { projects } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import SpotlightCard from "./spotlight-card";

const headerColors = ["bg-lav", "bg-cyan", "bg-peach", "bg-blue"];

function Diamond() {
  return (
    <svg viewBox="0 0 256 417" className="h-7 w-[18px] flex-none" aria-hidden="true">
      <path fill="#fff" stroke="#23267a" strokeWidth="14" d="M128 0 0 209l128 57 128-57ZM128 312v105L256 236Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading
        title="Smart contracts and dApps"
        subtitle="Eight builds, all tested with Foundry and deployed to Sepolia. Most have a live frontend you can try with a testnet wallet."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 90}>
            <SpotlightCard className="flex h-full flex-col">
              <div className={`flex items-center gap-3 border-b-2 border-line px-5 py-4 ${headerColors[i % 4]}`}>
                <Diamond />
                <h3 className="font-display text-lg font-bold text-[#1d1f66]">{p.title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-[0.95rem] leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border-[1.5px] border-line px-2.5 py-0.5 text-xs font-medium text-ink">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border-2 border-line bg-soft px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-lav"
                    >
                      {p.liveLabel ?? "Live demo"}
                    </a>
                  ) : null}
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border-2 border-line px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-lav"
                  >
                    Code
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
