import type { Metadata } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "./globals.css";
import { profile } from "@/lib/data";
import ScrollProgress from "@/components/scroll-progress";

const title = `${profile.name} | ${profile.title}`;

export const metadata: Metadata = {
  title,
  description: profile.bio,
  authors: [{ name: profile.name }],
  keywords: [profile.name, "Web3 Developer", "Solidity", "Foundry", "React", "Ethereum"],
  openGraph: { title, description: profile.bio, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <ScrollProgress />
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="animate-drift absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-lav/40 blur-[120px]" />
          <div className="animate-drift absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-cyan/30 blur-[120px] [animation-delay:-8s]" />
          <div className="animate-drift absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-peach/30 blur-[120px] [animation-delay:-14s]" />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
