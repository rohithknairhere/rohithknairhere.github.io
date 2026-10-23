import { m } from "framer-motion";
import { site } from "../data/content";
import { ArrowDown, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Magnetic } from "./Magnetic";
import { NodeField } from "./NodeField";
import { RotatingText } from "./RotatingText";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero({ theme, reduced }: { theme: string; reduced: boolean }) {
  const [first, ...rest] = site.name.split(" ");
  const resumeHref = `${import.meta.env.BASE_URL}${site.resumeFile}`;

  const socials = [
    { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
    { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
  ];

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <NodeField theme={theme} reduced={reduced} />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-8">
        <m.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg/60 px-3.5 py-1.5 text-sm text-muted backdrop-blur-sm"
        >
          <span className="pulse-dot size-2 rounded-full bg-accent" aria-hidden="true" />
          {site.location}
        </m.p>

        {/* The name only slides (no fade) so it counts as painted right away. */}
        <m.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.5rem,16vw,9.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]"
        >
          {first}
          <br />
          <span className="text-muted/90">{rest.join(" ")}</span>
          <span className="text-accent">.</span>
        </m.h1>

        <m.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 min-h-[2.2em] font-display text-xl font-medium sm:text-3xl"
        >
          <RotatingText phrases={site.taglines} reduced={reduced} />
        </m.p>

        <m.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-transform active:scale-95"
            >
              View Projects
              <ArrowDown
                width={16}
                height={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={resumeHref}
              download="Rohith-K-Nair-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-ink/40 active:scale-95"
            >
              <DownloadIcon width={16} height={16} />
              Download Resume
            </a>
          </Magnetic>

          <ul className="flex items-center gap-1 sm:ml-3" aria-label="Social links">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </m.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-ink sm:block"
      >
        <m.span
          className="block"
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown />
        </m.span>
      </a>
    </section>
  );
}
