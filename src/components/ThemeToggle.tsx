"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const resolved = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="p-2 rounded focus:outline-none focus:ring"
    >
      {resolved === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
