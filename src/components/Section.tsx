import { m } from "framer-motion";
import type { ReactNode } from "react";

/** Section shell: numbered label, heading, and a fade/slide-in on scroll. */
export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <m.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-10 flex items-baseline gap-4 sm:mb-14">
          <span className="text-sm tabular-nums text-accent">{index}</span>
          <h2
            id={`${id}-title`}
            className="font-display text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {title}
          </h2>
          <span aria-hidden="true" className="ml-2 hidden h-px flex-1 bg-line sm:block" />
        </div>
        {children}
      </m.div>
    </section>
  );
}

/** Stagger helper for lists inside a section. */
export const item = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};
