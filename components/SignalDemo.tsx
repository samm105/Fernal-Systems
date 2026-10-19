"use client";

import { useEffect, useState } from "react";

type Signal = "cold" | "warm" | "hot";

const SIGNAL_STYLES: Record<
  Signal,
  { dot: string; text: string; label: string }
> = {
  cold: { dot: "bg-cold", text: "text-cold", label: "COLD" },
  warm: { dot: "bg-warm", text: "text-warm", label: "WARM" },
  hot: { dot: "bg-hot", text: "text-hot", label: "HOT" },
};

const SCRIPT = [
  {
    name: "R. Alvarez",
    message: "Roof's leaking near the chimney, need someone this week.",
    signal: "hot" as Signal,
    reply:
      "Hi R. Alvarez — sorry to hear about the leak. I can get a tech out Thursday morning, does 9am work?",
  },
  {
    name: "J. Kim",
    message: "Just comparing quotes for a bathroom remodel, no rush.",
    signal: "warm" as Signal,
    reply:
      "Hi J. Kim — happy to help you compare. Could you share rough square footage so I can send an estimate range?",
  },
  {
    name: "D. Patel",
    message: "What software do you use for this? Just curious.",
    signal: "cold" as Signal,
    reply:
      "Hi D. Patel — thanks for the interest! Here's a quick overview of how it works...",
  },
];

export default function SignalDemo() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<
    "incoming" | "scoring" | "scored" | "reply"
  >("incoming");
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timeline: Array<[number, () => void]> = [
      [0, () => setPhase("incoming")],
      [900, () => setPhase("scoring")],
      [2100, () => setPhase("scored")],
      [2900, () => setPhase("reply")],
    ];
    const timers = timeline.map(([delay, fn]) => setTimeout(fn, delay));
    const advance = setTimeout(() => {
      setStep((s) => (s + 1) % SCRIPT.length);
    }, 5600);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(advance);
    };
  }, [step]);

  useEffect(() => {
    setElapsed(0);
    if (phase === "incoming") return;
    const id = setInterval(() => {
      setElapsed((e) => (e < 87 ? e + Math.ceil(Math.random() * 9) : e));
    }, 90);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const current = SCRIPT[step];
  const style = SIGNAL_STYLES[current.signal];
  const seconds = phase === "reply" ? Math.min(elapsed, 87) : elapsed;

  return (
    <div className="w-full max-w-md rounded-2xl border border-line bg-panel/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-faint" />
          <span className="h-1.5 w-1.5 rounded-full bg-faint" />
          <span className="h-1.5 w-1.5 rounded-full bg-faint" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
          inbound_lead.log
        </span>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              from
            </p>
            <p className="font-display text-base text-paper">{current.name}</p>
          </div>
          <span className="rounded-full border border-line px-2 py-1 font-mono text-[11px] text-faint">
            00:{seconds.toString().padStart(2, "0")}s
          </span>
        </div>

        <p className="rounded-lg bg-ink/60 px-3 py-2 text-sm leading-relaxed text-muted">
          &ldquo;{current.message}&rdquo;
        </p>

        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
          {phase === "incoming" && (
            <span className="text-faint">waiting for signal…</span>
          )}
          {phase === "scoring" && (
            <>
              <span className="h-2 w-2 animate-blink rounded-full bg-muted" />
              <span className="text-muted">scoring lead…</span>
            </>
          )}
          {(phase === "scored" || phase === "reply") && (
            <>
              <span className={`h-2 w-2 rounded-full ${style.dot}`} />
              <span className={style.text}>{style.label} LEAD</span>
            </>
          )}
        </div>

        <div
          className={`overflow-hidden rounded-lg border border-line bg-ink/40 transition-all duration-500 ${
            phase === "reply"
              ? "max-h-32 px-3 py-3 opacity-100"
              : "max-h-0 px-3 py-0 opacity-0"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
            auto-reply sent
          </p>
          <p className="mt-1 text-sm leading-relaxed text-paper">
            {current.reply}
          </p>
        </div>
      </div>
    </div>
  );
}
