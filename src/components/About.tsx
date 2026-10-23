import { m } from "framer-motion";
import { about } from "../data/content";
import { item, Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <p className="text-xl leading-relaxed text-ink/90 sm:text-2xl sm:leading-relaxed">
          {about.paragraph}
        </p>

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
