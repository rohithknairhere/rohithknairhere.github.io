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
            </ul>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
