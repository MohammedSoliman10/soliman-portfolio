import Reveal from "./reveal";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-10">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted">{subtitle}</p> : null}
    </Reveal>
  );
}
