"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type RGB = [number, number, number];
type Open = "work" | "menu" | null;

const IVORY: RGB = [243, 242, 238];
const SAMPLE_POINTS = [0.2, 0.5, 0.8];

const WORK_LINKS = [
  {
    href: "/work/real-estate",
    title: "Real estate",
    desc: "Broker Brain, Reverse-Match, follow-up",
  },
  {
    href: "/work/service-businesses",
    title: "Service businesses",
    desc: "Lead response, follow-up",
  },
];

const CUSTOM_LINK = {
  href: "/work#audit",
  title: "Custom builds & audit",
  desc: "A $99 audit, or a system built around your workflow",
};

function parseColor(value: string): [number, number, number, number] | null {
  const match = value.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(/[\s,/]+/).filter(Boolean);
  const nums = parts.map((p) => parseFloat(p));
  if (nums.length < 3 || nums.slice(0, 3).some(Number.isNaN)) return null;
  const alpha = parts[3]
    ? parts[3].endsWith("%")
      ? nums[3] / 100
      : nums[3]
    : 1;
  return [nums[0], nums[1], nums[2], alpha];
}

// Composites every background layer under the point, top to bottom,
// skipping the navbar itself, and falls back to ivory for any remainder.
function colorBehind(x: number, y: number, header: HTMLElement): RGB {
  let pr = 0;
  let pg = 0;
  let pb = 0;
  let covered = 0;
  for (const el of document.elementsFromPoint(x, y)) {
    if (header.contains(el)) continue;
    const c = parseColor(getComputedStyle(el).backgroundColor);
    if (!c || c[3] === 0) continue;
    const weight = c[3] * (1 - covered);
    pr += c[0] * weight;
    pg += c[1] * weight;
    pb += c[2] * weight;
    covered += weight;
    if (covered >= 0.99) break;
  }
  const rest = 1 - covered;
  return [pr + IVORY[0] * rest, pg + IVORY[1] * rest, pb + IVORY[2] * rest];
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 3.5 5 6.5 8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuItem({
  href,
  title,
  desc,
  onClick,
}: {
  href: string;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl px-4 py-3 transition hover:bg-pale/60"
    >
      <span className="block font-display text-sm font-700 text-paper">
        {title}
      </span>
      <span className="mt-0.5 block text-xs leading-relaxed text-muted">
        {desc}
      </span>
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const hoverOpened = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [open, setOpen] = useState<Open>(null);
  const [tone, setTone] = useState<{ rgb: RGB; dark: boolean }>({
    rgb: IVORY,
    dark: false,
  });

  const close = useCallback(() => {
    hoverOpened.current = false;
    setOpen(null);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Close menus on navigation
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Escape key + click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, close]);

  useEffect(() => () => cancelClose(), []);

  // Background colour sampling behind the pill
  useEffect(() => {
    const header = headerRef.current;
    const pill = pillRef.current;
    if (!header || !pill) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = pill.getBoundingClientRect();
      const y = rect.top + rect.height / 2;
      const samples = SAMPLE_POINTS.map((p) =>
        colorBehind(rect.left + rect.width * p, y, header),
      );
      const avg = [0, 1, 2].map((i) => {
        const mean = samples.reduce((sum, c) => sum + c[i], 0) / samples.length;
        return Math.min(255, Math.round(mean / 2) * 2);
      }) as RGB;
      const luminance =
        (0.299 * avg[0] + 0.587 * avg[1] + 0.114 * avg[2]) / 255;
      const dark = luminance < 0.5;
      setTone((prev) =>
        prev.dark === dark &&
        prev.rgb[0] === avg[0] &&
        prev.rgb[1] === avg[1] &&
        prev.rgb[2] === avg[2]
          ? prev
          : { rgb: avg, dark },
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Desktop: hover opens the Work menu, click toggles it (touch uses click only)
  const onTriggerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    if (open !== "work") {
      hoverOpened.current = true;
      setOpen("work");
    }
  };
  const onTriggerClick = () => {
    if (hoverOpened.current) {
      hoverOpened.current = false;
      return;
    }
    setOpen((o) => (o === "work" ? null : "work"));
  };
  const onWrapEnter = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") cancelClose();
  };
  const onWrapLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || open !== "work") return;
    cancelClose();
    closeTimer.current = setTimeout(close, 180);
  };

  const [r, g, b] = tone.rgb;
  const [sr, sg, sb] = tone.rgb.map((v) => Math.round(v * 0.55));

  const linkClass = tone.dark
    ? "text-ink/70 transition hover:text-ink"
    : "text-muted transition hover:text-paper";
  const logoClass = tone.dark ? "text-ink" : "text-paper";
  const ctaClass = tone.dark
    ? "bg-ink text-hot hover:bg-pale"
    : "bg-hot text-ink hover:bg-warm";
  const burgerClass = tone.dark
    ? "text-ink hover:bg-ink/10"
    : "text-paper hover:bg-paper/5";

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className="relative mx-auto max-w-5xl"
        onPointerEnter={onWrapEnter}
        onPointerLeave={onWrapLeave}
      >
        <div
          ref={pillRef}
          className="flex items-center justify-between rounded-full border py-2.5 pl-6 pr-2.5 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-500 ease-out"
          style={{
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.6)`,
            borderColor: tone.dark
              ? "rgba(255,255,255,0.14)"
              : "rgba(255,255,255,0.6)",
            boxShadow: `0 10px 32px -10px rgba(${sr}, ${sg}, ${sb}, 0.38), 0 1px 2px rgba(21,24,23,0.05)`,
          }}
        >
          <Link
            href="/"
            className={`flex items-center gap-2 font-display text-base font-700 tracking-tight transition-colors duration-500 ${logoClass}`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-hot" />
            Fernal Systems
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open === "work"}
              aria-controls="work-menu"
              onPointerEnter={onTriggerEnter}
              onClick={onTriggerClick}
              className={`inline-flex items-center gap-1.5 ${linkClass}`}
            >
              Work
              <Chevron open={open === "work"} />
            </button>
            <Link href="/process" className={linkClass}>
              Our process
            </Link>
            <Link href="/#performance" className={linkClass}>
              Performance
            </Link>
            <Link href="/#faq" className={linkClass}>
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-1.5">
            <Link
              href="/#contact"
              className={`hidden rounded-full px-4 py-2 text-sm font-medium transition-colors duration-500 sm:inline-block ${ctaClass}`}
            >
              Book a call
            </Link>
            <button
              type="button"
              aria-label={open === "menu" ? "Close menu" : "Open menu"}
              aria-expanded={open === "menu"}
              onClick={() => {
                hoverOpened.current = false;
                setOpen((o) => (o === "menu" ? null : "menu"));
              }}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition md:hidden ${burgerClass}`}
            >
              <svg
                aria-hidden
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                {open === "menu" ? (
                  <path
                    d="M4 4l10 10M14 4 4 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 5.5h12M3 9h12M3 12.5h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop dropdown — kept outside the pill so its blur still works */}
        {open === "work" && (
          <div
            id="work-menu"
            className="absolute left-1/2 top-full hidden w-[min(26rem,100%)] -translate-x-1/2 pt-2 md:block"
          >
            <div className="rounded-2xl border border-line bg-panel/95 p-2 shadow-[0_18px_40px_-16px_rgba(21,24,23,0.25)] backdrop-blur-xl">
              <p className="px-4 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Work by industry
              </p>
              {WORK_LINKS.map((item) => (
                <MenuItem key={item.href} {...item} onClick={close} />
              ))}
              <div className="mx-2 my-1 border-t border-line" />
              <MenuItem {...CUSTOM_LINK} onClick={close} />
              <div className="mx-2 mt-1 border-t border-line px-2 pb-1 pt-2">
                <Link
                  href="/work"
                  onClick={close}
                  className="text-xs text-hot underline underline-offset-4"
                >
                  All work →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {open === "menu" && (
          <div className="absolute inset-x-0 top-full mt-2 md:hidden">
            <div className="rounded-2xl border border-line bg-panel/95 p-2 shadow-[0_18px_40px_-16px_rgba(21,24,23,0.25)] backdrop-blur-xl">
              <p className="px-4 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Work
              </p>
              {WORK_LINKS.map((item) => (
                <MenuItem key={item.href} {...item} onClick={close} />
              ))}
              <MenuItem {...CUSTOM_LINK} onClick={close} />

              <div className="mx-2 my-1 border-t border-line" />

              {[
                { href: "/process", label: "Our process" },
                { href: "/#performance", label: "Performance" },
                { href: "/#faq", label: "FAQ" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-sm text-paper transition hover:bg-pale/60"
                >
                  {l.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={close}
                className="m-2 block rounded-full bg-hot px-4 py-3 text-center text-sm font-medium text-ink transition hover:bg-warm"
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
