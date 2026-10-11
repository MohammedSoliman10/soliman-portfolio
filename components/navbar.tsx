"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nodes.forEach((n) => observer.observe(n));
    const onTop = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line/15 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-ink">
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.lastName}</span>
        </a>
        <div className="flex items-center gap-5 text-sm font-medium sm:gap-8">
          {navLinks.map((link) => {
            const on = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-0.5 transition-colors ${
                  on ? "border-line text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
