import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { Project } from "../data/content";
import { ArrowUpRight } from "./Icons";

/** Card that tilts toward the cursor with a soft spotlight. Opens the detail modal. */
export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (el: HTMLButtonElement) => void;
}) {
  const reduced = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), spring);
  const spot = useTransform(
    [px, py],
    ([x, y]: number[]) =>
      `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, var(--accent-soft), transparent 60%)`,
  );

  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <m.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <m.button
        type="button"
        onClick={(e) => onOpen(e.currentTarget)}
        onPointerMove={onMove}
        onPointerLeave={reset}
        aria-haspopup="dialog"
        style={reduced ? undefined : { rotateX, rotateY }}
        whileHover={reduced ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 text-left transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-black/10 sm:p-7"
      >
        <m.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spot }}
        />
        <span className="relative mb-8 flex items-center justify-between text-sm text-muted">
          <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span className="grid size-9 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
            <ArrowUpRight width={16} height={16} />
          </span>
        </span>
        <span className="relative font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
          {project.title}
        </span>
        <span className="relative mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">
          {project.description}
        </span>
        <span className="relative mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </span>
      </m.button>
    </m.li>
  );
}
