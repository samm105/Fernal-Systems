const CORE_STEPS = [
  {
    n: "01",
    title: "Capture",
    copy: "Someone fills out your contact form, DMs your business, or requests a quote. Nothing changes about how they reach you.",
    glow: "animate-glow-cold",
  },
  {
    n: "02",
    title: "Score",
    copy: "The system reads the message and rates how serious it is — hot, warm, or cold — the same way a good salesperson would.",
    glow: "animate-glow-warm",
  },
  {
    n: "03",
    title: "Respond",
    copy: "A personalized reply goes out from your own inbox in under 90 seconds, and the lead is logged in your sheet or CRM automatically.",
    glow: "animate-glow-hot",
  },
  {
    n: "04",
    title: "Notify your team",
    copy: "The moment a lead comes in, the right person gets pinged on whatever you already use — Slack, WhatsApp, or email — with the lead's details and how it scored.",
    glow: "animate-glow-hot",
  },
];

const ARROW_COLOR = ["bg-warm", "bg-hot", "bg-hot"];

const DRIP_STEPS = [
  {
    label: "Day 0",
    title: "First reply sent",
    copy: "The scored, personalized reply goes out — same as every lead, no exceptions.",
  },
  {
    label: "A few days later",
    title: "First follow-up",
    copy: "Still no reply? A fresh message goes out — never a repeat of the first one.",
  },
  {
    label: "About a week after that",
    title: "Final follow-up",
    copy: "One more message with a different angle, then the sequence closes on its own.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
            One system, start to finish.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            No new dashboard to check, no extra login for your team. It runs
            quietly between the tools you already use — and it doesn't stop at
            the first reply.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_STEPS.map((step, i) => (
            <div
              key={step.n}
              data-reveal /* ← added: each step card fades in one after another */
              style={{ animationDelay: `${i * 1.1}s` }}
              className={`relative rounded-2xl border border-line bg-panel/60 p-7 ${step.glow}`}
            >
              <span className="font-mono text-sm text-muted">{step.n}</span>
              <h3 className="mt-4 font-display text-xl font-700 text-paper">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.copy}
              </p>

              {i < CORE_STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-[-1.65rem] top-1/2 hidden h-4 w-6 -translate-y-1/2 items-center overflow-hidden lg:flex"
                >
                  <span
                    style={{ animationDelay: `${i * 1.1 + 0.5}s` }}
                    className={`h-1.5 w-1.5 rounded-full ${ARROW_COLOR[i]} animate-dot-flow`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          data-reveal /* ← added: the whole "If a lead goes quiet" panel */
          className="mt-20 rounded-2xl border border-line bg-panel/30 p-8 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl font-700 text-paper">
              If a lead goes quiet
            </h3>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              Growth tier
            </span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            The reply above is guaranteed on every plan. On the Growth tier, the
            system keeps working a lead that doesn't respond, instead of letting
            it go cold after one message.
          </p>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-4">
            {DRIP_STEPS.map((step, i) => (
              <div
                key={step.label}
                data-reveal /* ← added: Day 0, follow-up, final follow-up appear in sequence */
                className="relative flex-1"
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-ink/60 font-mono text-[11px] text-muted">
                    {i + 1}
                  </span>
                  {i < DRIP_STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden h-px flex-1 bg-line lg:mt-3.5 lg:block"
                    />
                  )}
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {step.label}
                </p>
                <h4 className="mt-1 font-display text-base font-700 text-paper">
                  {step.title}
                </h4>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>

          <div
            data-reveal /* ← added: the closing "a reply stops the sequence" line */
            className="mt-8 flex items-center gap-2.5 border-t border-line pt-6"
          >
            <span className="h-2 w-2 shrink-0 animate-blink rounded-full bg-hot" />
            <p className="text-sm text-paper">
              A reply on any message, at any point, stops the sequence
              immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
