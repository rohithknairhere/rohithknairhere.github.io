import { contact, site } from "../data/content";
import { ArrowUpRight, CopyIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import { Magnetic } from "./Magnetic";
import { Section } from "./Section";

export function Contact({ onToast }: { onToast: (msg: string) => void }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      onToast("Email copied to clipboard");
      return;
    } catch {
      // Fall back to the older copy method below.
    }
    const ta = document.createElement("textarea");
    ta.value = site.email;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    onToast(ok ? "Email copied to clipboard" : "Couldn't copy — email is " + site.email);
  };

  const links = [
    { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
  ];

  return (
    <Section id="contact" index="05" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        {contact.blurb}
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex min-w-0 items-center gap-2 font-display text-[clamp(1.15rem,5.2vw,2.75rem)] font-semibold tracking-tight [overflow-wrap:anywhere]"
        >
          <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
            {site.email}
          </span>
          <ArrowUpRight className="shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
        <Magnetic>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent active:scale-95"
          >
            <CopyIcon width={16} height={16} />
            Copy email
          </button>
        </Magnetic>
      </div>

      <ul className="mt-12 flex flex-wrap gap-3">
        {links.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent"
            >
              <Icon className="text-muted transition-colors group-hover:text-accent" />
              <span className="font-medium">{label}</span>
              <ArrowUpRight
                width={16}
                height={16}
                className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
