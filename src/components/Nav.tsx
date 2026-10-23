import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "../data/content";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";
import type { Theme } from "../hooks/useTheme";

export function Nav({
  active,
  theme,
  onToggleTheme,
}: {
  active: string;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        open
          ? "border-b border-line bg-bg"
          : scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
          aria-label={`${site.initials}, ${site.name}, back to top`}
        >
          {site.initials}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className="relative">
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                  {isActive && (
                    <m.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent-soft ring-1 ring-accent/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="ml-2 grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </m.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-muted hover:text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-4 pb-5 pt-1">
              {nav.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      // Close first, then scroll; otherwise the closing menu cancels the scroll.
                      e.preventDefault();
                      setOpen(false);
                      requestAnimationFrame(() => {
                        document.getElementById(l.id)?.scrollIntoView();
                        history.replaceState(null, "", `#${l.id}`);
                      });
                    }}
                    aria-current={active === l.id ? "location" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 font-display text-2xl font-semibold ${
                      active === l.id ? "text-accent" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
