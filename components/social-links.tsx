import { profile } from "@/lib/data";

const items = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "X", href: profile.socials.x },
  { label: "Medium", href: profile.socials.medium },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="rounded-full border-2 border-line/30 bg-card/70 px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-line hover:bg-lav"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
