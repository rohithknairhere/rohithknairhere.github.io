import { LazyMotion, MotionConfig, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Toast } from "./components/Toast";
import { nav, site } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";

const sectionIds = nav.map((n) => n.id);
const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export default function App() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(sectionIds);
  // Reduced-motion is only known in the browser; stay false until mounted so
  // the prerendered HTML and the first client render match.
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduced = mounted && !!prefersReduced;
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number>(0);

  const showToast = useCallback((msg: string) => {
    window.clearTimeout(timer.current);
    setToast(msg);
    timer.current = window.setTimeout(() => setToast(null), 2400);
  }, []);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-accent px-4 py-2 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav active={active} theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero theme={theme} reduced={reduced} />
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <About />
            <Projects />
            <Timeline />
            <Skills />
            <Contact onToast={showToast} />
          </div>
        </main>
        <footer className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.location}</p>
        </footer>
        <Toast message={toast} />
      </MotionConfig>
    </LazyMotion>
  );
}
