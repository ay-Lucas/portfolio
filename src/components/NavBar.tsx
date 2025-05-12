"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/resume.pdf", label: "Résumé", external: true },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-black/80 transition-colors duration-300 shadow">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-5 md:px-2 py-4">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-primary-light dark:hover:text-primary-dark transition"
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
              className="hover:text-primary-light dark:hover:text-primary-dark transition"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map(({ href, label, external }) => (
              <Link
                key={href}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                className="hover:text-primary-light dark:hover:text-primary-dark transition"
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
