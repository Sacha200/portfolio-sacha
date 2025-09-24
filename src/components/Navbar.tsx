"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "_accueil" },
  { href: "/about", label: "_a-propos" },
  { href: "/projects", label: "_projets" },
  { href: "/contact", label: "_contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b-2" style={{ borderColor: "var(--border)" }}>
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-retina lowercase text-foreground/80">
            sacha_nahmani
        </Link>
        <ul className="flex items-center text-sm">
          {links.map(link => (
            <li
              key={link.href}
              className="relative h-14 flex items-stretch border-l-2 first:border-l-0"
              style={{ borderColor: "var(--border)" }}
            >
              <Link
                href={link.href}
                className={`relative block h-full flex items-center px-7 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-px h-[3px]" style={{ background: "#FFB86A" }} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


