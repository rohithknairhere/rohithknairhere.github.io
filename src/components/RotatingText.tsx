import { useEffect, useState } from "react";

/** Types a phrase, pauses, erases it, then moves to the next one. */
export function RotatingText({ phrases, reduced }: { phrases: string[]; reduced: boolean }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const full = phrases[index % phrases.length];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = window.setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, index, phrases, reduced]);

  if (reduced) {
    return <span>{phrases.join(" · ")}</span>;
  }

  return (
    <>
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent" />
      </span>
    </>
  );
}
