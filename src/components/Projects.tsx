import { useCallback, useState } from "react";
import { projects, type Project } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Section } from "./Section";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [opener, setOpener] = useState<HTMLElement | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <Section id="projects" index="02" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            onOpen={(el) => {
              setOpener(el);
              setSelected(p);
            }}
          />
        ))}
      </ul>
      <ProjectModal project={selected} onClose={close} returnFocus={opener} />
    </Section>
  );
}
