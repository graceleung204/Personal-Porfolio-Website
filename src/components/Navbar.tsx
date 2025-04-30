"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-4 rounded-full border border-periwinkle/30 bg-white/70 backdrop-blur-md px-3 sm:px-5 py-2.5 shadow-[0_8px_30px_-12px_rgb(109_93_245/0.35)]">
        <Link href="/" className="hidden sm:block font-bold text-lg gradient-text">Grace.dev</Link>
        <ul className="flex gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium mx-auto sm:mx-0">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-full px-2 sm:px-3 py-1.5 transition-colors ${
                    active
                      ? "bg-gradient-to-r from-sky to-periwinkle text-white"
                      : "text-ink/70 hover:bg-periwinkle/15 hover:text-violet-blue"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
