"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER_MS = 120;
const MAX_STEPS = 5; // cap so a big batch never waits too long

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // footer is excluded: it sits at the very bottom and never crosses the trigger line
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main > section, [data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger only the items that arrive together in this moment.
        const arriving = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          );

        arriving.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i, MAX_STEPS) * STAGGER_MS}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" },
    );

    const viewportHeight = window.innerHeight;

    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < viewportHeight) return;
      el.classList.add("reveal");
      observer.observe(el);
    });

    // Safety net: at the bottom of the page, reveal anything still hidden.
    const revealRemaining = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (!atBottom) return;
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    };
    window.addEventListener("scroll", revealRemaining, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealRemaining);
    };
  }, [pathname]);

  return null;
}
