import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { leadership } from "../data/content";
import { item, Section } from "./Section";

export function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <Section id="leadership" index="03" title="Leadership">
      <ol ref={listRef} className="relative ml-1.5 max-w-3xl">
        {/* Track + accent line that fills as you scroll */}
        <span aria-hidden="true" className="absolute left-0 top-2 bottom-2 w-px bg-line" />
        <m.span
          aria-hidden="true"
          className="absolute left-0 top-2 bottom-2 w-px origin-top bg-accent"
          style={{ scaleY: reduced ? 1 : progress }}
        />
        {leadership.map((t, i) => (
          <m.li
            key={t.role}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
            className="group relative pb-10 pl-8 last:pb-0 sm:pl-12"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg transition-colors duration-300 group-hover:bg-accent"
            />
            {t.period && <p className="mb-1 text-sm tabular-nums text-accent">{t.period}</p>}
            <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{t.role}</h3>
            <p className="mt-1 text-muted">{t.org}</p>
            {t.note && <p className="mt-2 max-w-xl leading-relaxed text-ink/80">{t.note}</p>}
          </m.li>
        ))}
      </ol>
    </Section>
  );
}
