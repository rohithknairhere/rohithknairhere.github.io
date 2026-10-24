import { m } from "framer-motion";
import { skills } from "../data/content";
import { item, Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skills.map((g, gi) => (
          <m.div
            key={g.group}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={gi}
          >
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="cursor-default rounded-full border border-line bg-surface px-4 py-2 text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {s}
                </li>
              ))}
              {g.assisted?.map((s) => (
                <li
                  key={s}
                  className="cursor-default rounded-full border border-dashed border-muted/70 px-4 py-2 text-[0.95rem] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {s}
                  <span className="sr-only"> (AI-assisted)</span>
                </li>
              ))}
            </ul>
            {g.assisted && g.assisted.length > 0 && (
              <p className="mt-3 flex items-center gap-2 text-xs text-muted" aria-hidden="true">
                <span className="inline-block h-3 w-5 rounded-full border border-dashed border-muted" />
                AI-assisted
              </p>
            )}
          </m.div>
        ))}
      </div>
    </Section>
  );
}
