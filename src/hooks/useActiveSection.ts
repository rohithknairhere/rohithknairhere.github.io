import { useEffect, useState } from "react";

/** Returns the id of the section currently in the middle of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    // Clear the highlight when back at the hero.
    const hero = document.getElementById("top");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [ids]);

  return active === "top" ? "" : active;
}
