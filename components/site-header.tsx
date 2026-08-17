"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStudy } from "@/components/study-provider";

const links = [
  { href: "/", label: "The Study" },
  { href: "/course", label: "Course" },
  { href: "/report", label: "For the guide" },
  { href: "/feedback", label: "Reflect" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { state, ready } = useStudy();
  const learnerName = ready && state.learnerName ? state.learnerName : "Learner";
  const initials = learnerName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "S";
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
        <Link className="learner-chip" href="/settings" aria-label={`Open settings for ${learnerName}`}>
          <span>{initials}</span><span className="learner-name">{learnerName}’s study</span>
        </Link>
      </div>
    </header>
  );
}
