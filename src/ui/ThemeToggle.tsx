"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative inline-flex items-center justify-center
        h-9 w-9
        rounded-full
        border border-slate-300
        bg-white
        text-slate-700
        shadow-sm
        transition-all
        hover:bg-slate-100
        hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:bg-slate-900
        dark:border-slate-700
        dark:text-slate-300
        dark:hover:bg-slate-800
      "
    >
      {isDark ? (
        <Moon size={16} className="text-indigo-400" />
      ) : (
        <Sun size={16} className="text-amber-500" />
      )}
    </button>
  );
}
