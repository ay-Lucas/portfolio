"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/resume.pdf", label: "Résumé", external: true },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Basic scrollspy for section highlighting
  useEffect(() => {
    const ids = ["about", "projects"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // useEffect without import; add import from react

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40 border-b border-zinc-200/60 dark:border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-primary-light dark:hover:text-primary-dark"
        >
          Lucas Anderson
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-lg">
          {NAV_LINKS.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-current={!external && active && href === `#${active}` ? "page" : undefined}
              className={`hover:text-primary-light dark:hover:text-primary-dark ${
                !external && active && href === `#${active}`
                  ? "text-primary-light dark:text-primary-dark"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map(({ href, label, external }) => (
              <Link
                key={href}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                aria-current={!external && active && href === `#${active}` ? "page" : undefined}
                className={`hover:text-primary-light dark:hover:text-primary-dark ${
                  !external && active && href === `#${active}`
                    ? "text-primary-light dark:text-primary-dark"
                    : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
