import { techStack } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading title="What I build with" subtitle="The same toolkit runs through every project above." />
      <div className="grid gap-6 md:grid-cols-3">
        {techStack.map((g, i) => (
          <Reveal key={g.group} delay={i * 100}>
            <div className="h-full rounded-3xl border-2 border-line bg-card p-6">
              <h3 className="font-display text-lg font-bold text-ink">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-xl border-2 border-line/40 bg-soft px-3 py-1.5 text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
