import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 text-center text-sm text-muted">
      &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
    </footer>
  );
}
