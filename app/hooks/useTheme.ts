"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const DEFAULT_THEME: Theme = "dark";

const applyThemeClass = (newTheme: Theme) => {
  const root = document.documentElement;

  if (newTheme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
    return;
  }

  root.classList.add("light");
  root.classList.remove("dark");
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(initialTheme);
    applyThemeClass(initialTheme);
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    applyThemeClass(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme, mounted };
}
