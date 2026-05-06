"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur transition hover:scale-105 hover:border-electric/60 focus:outline-none focus:ring-2 focus:ring-electric/60 ${
        isDark
          ? "border-white/15 bg-slate-950 text-white hover:bg-slate-900"
          : "border-slate-300/50 bg-white/70 text-slate-800 hover:bg-white"
      }`}
    >
      {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
    </button>
  );
}
