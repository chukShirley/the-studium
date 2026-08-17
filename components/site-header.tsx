"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "The Study" },
  { href: "/course", label: "Course" },
  { href: "/report", label: "For the guide" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="The Studium home">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span>The Studium</span>
        </Link>
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="learner-chip"><span>AS</span><span className="learner-name">Anna’s study</span></div>
      </div>
    </header>
  );
}
