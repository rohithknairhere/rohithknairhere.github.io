import { m } from "framer-motion";
import { about } from "../data/content";
import { item, Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <p className="text-xl leading-relaxed text-ink/90 sm:text-2xl sm:leading-relaxed">
            {about.paragraph}
          </p>

          <h3 className="mb-5 mt-12 text-sm font-medium uppercase tracking-[0.18em] text-muted">
            Interests
          </h3>
          <ul className="grid gap-3">
            {about.interests.map((it, i) => (
              <m.li
                key={it.area}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col gap-1 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="shrink-0 font-display text-lg font-semibold tracking-tight sm:w-36">
                  <span className="mr-2 text-sm tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {it.area}
                </span>
                <span className="text-muted">{it.detail}</span>
              </m.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted">
            Education
          </h3>
          <ul className="space-y-5">
            {about.education.map((e, i) => (
              <m.li
                key={e.school}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="border-l-2 border-line pl-4 transition-colors hover:border-accent"
              >
                <p className="font-medium">{e.school}</p>
                <p className="text-sm text-muted">
                  {e.detail}
                  {e.period && <> · {e.period}</>}
                </p>
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
