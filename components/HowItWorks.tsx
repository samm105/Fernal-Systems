const STEPS = [
  {
    n: "01",
    title: "Capture",
    copy:
      "Someone fills out your contact form, DMs your business, or requests a quote. Nothing changes about how they reach you.",
  },
  {
    n: "02",
    title: "Score",
    copy:
      "The system reads the message and rates how serious it is — hot, warm, or cold — the same way a good salesperson would.",
  },
  {
    n: "03",
    title: "Respond",
    copy:
      "A personalized reply goes out from your own inbox in under 90 seconds, and the lead is logged in your sheet or CRM automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
            One system, three jobs.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            No new dashboard to check, no extra login for your team. It runs quietly between
            the tools you already use.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative rounded-2xl border border-line bg-panel/60 p-7">
              <span className="font-mono text-sm text-faint">{step.n}</span>
              <h3 className="mt-4 font-display text-xl font-700 text-paper">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-1.1rem] top-1/2 hidden -translate-y-1/2 font-mono text-faint md:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
