import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

function current(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  // Start as "dark" to match the prerendered HTML, then sync to the real theme.
  const [theme, setTheme] = useState<Theme>("dark");

  // Follow the system setting until the visitor picks one themselves.
  useEffect(() => {
    setTheme(current());
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        /* storage blocked */
      }
      if (!saved) apply(mq.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const apply = (t: Theme) => {
    document.documentElement.classList.toggle("dark", t === "dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", t === "dark" ? "#0A0B0E" : "#F6F6F2");
    setTheme(t);
  };

  const toggle = useCallback(() => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked */
    }
    apply(next);
  }, []);

  return { theme, toggle };
}
