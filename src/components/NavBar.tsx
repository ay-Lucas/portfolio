"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-5 md:px-2">
        <Link href="/" className="text-2xl font-bold hover:text-blue-500">
          Lucas Anderson
        </Link>
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="hover:text-blue-500"
          >
            Résumé
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="#about"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              Résumé
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
