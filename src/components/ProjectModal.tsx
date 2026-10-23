import { AnimatePresence, m } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../data/content";
import { CloseIcon, GitHubIcon } from "./Icons";

/** Accessible dialog: traps focus, closes on Escape or backdrop click, restores focus. */
export function ProjectModal({
  project,
  onClose,
  returnFocus,
}: {
  project: Project | null;
  onClose: () => void;
  returnFocus: HTMLElement | null;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      returnFocus?.focus();
    };
  }, [project, onClose, returnFocus]);

  if (typeof document === "undefined") return null; // prerender: nothing to show
  // Render at the body so no animated (transformed) parent can offset the overlay.
  return createPortal(
    <AnimatePresence>
      {project && (
        <m.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            aria-describedby="project-desc"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative max-h-[85svh] w-full max-w-lg overflow-y-auto rounded-3xl border border-line bg-surface p-6 shadow-2xl sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
            >
              <CloseIcon />
            </button>

            {project.context && <p className="mb-3 pr-12 text-sm text-accent">{project.context}</p>}
            <h3
              id="project-title"
              className="pr-12 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
            >
              {project.title}
            </h3>
            <p id="project-desc" className="mt-4 leading-relaxed text-muted">
              {project.description}
            </p>

            {project.details.length > 0 ? (
              <ul className="mt-6 space-y-2.5">
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 rounded-xl border border-dashed border-line px-4 py-3 text-sm text-muted">
                More detail coming soon.
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                  {t}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
              >
                <GitHubIcon width={16} height={16} />
                View on GitHub
              </a>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
