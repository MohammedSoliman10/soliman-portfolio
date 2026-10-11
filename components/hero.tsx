"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";
import HeroScene from "./hero-scene";
import Reveal from "./reveal";
import SocialLinks from "./social-links";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / r.height));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-10 pt-14 text-center sm:pt-20"
    >

      <h1 className="font-display text-[clamp(3.2rem,12.5vw,9rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
        <span className="name-mask">
          <span className="name-line">{profile.firstName}</span>
        </span>
        <span className="name-mask">
          <span className="name-line [animation-delay:120ms]">{profile.lastName}</span>
        </span>
      </h1>

      <Reveal delay={350}>
        <p className="mt-6 font-display text-xl font-bold text-body sm:text-2xl">{profile.title}</p>
      </Reveal>
      <Reveal delay={450}>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio}
        </p>
      </Reveal>
      <Reveal delay={550}>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="btn-pop inline-flex h-12 items-center rounded-2xl border-2 border-line bg-lav px-7 text-sm font-bold text-ink"
          >
            See my projects
          </a>
          <a
            href="#contact"
            className="btn-pop inline-flex h-12 items-center rounded-2xl border-2 border-line bg-card px-7 text-sm font-bold text-ink"
          >
            Contact me
          </a>
        </div>
      </Reveal>
      <Reveal delay={650}>
        <SocialLinks className="mt-8 justify-center" />
      </Reveal>

      <Reveal variant="scale" delay={300} className="mt-12 w-full max-w-4xl">
        <HeroScene />
      </Reveal>
    </section>
  );
}