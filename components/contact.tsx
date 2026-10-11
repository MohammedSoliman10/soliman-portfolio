import { profile } from "@/lib/data";
import Reveal from "./reveal";
import SocialLinks from "./social-links";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal variant="scale">
        <div className="rounded-[2rem] border-2 border-line bg-lav px-6 py-14 text-center shadow-[6px_6px_0_var(--color-line)] sm:px-12">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1d1f66] sm:text-4xl">
            Let&apos;s build something onchain
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[#2f3290]">
            Open to Web3 developer roles, hackathon teams and freelance work.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn-pop mt-8 inline-flex h-12 items-center rounded-2xl border-2 border-line bg-white px-7 text-sm font-bold text-[#1d1f66]"
          >
            {profile.email}
          </a>
          <SocialLinks className="mt-8 justify-center" />
        </div>
      </Reveal>
    </section>
  );
}
