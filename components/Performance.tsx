// Metrics shown here come from our live demo system, not from a client.
// Swap in real before/after numbers and a testimonial after the first pilot.

const METRICS = [
  {
    value: "< 90 sec",
    label: "First reply to every new lead, as shown in our live demo",
  },
  { value: "100%", label: "Of inbound leads read and scored, none skipped" },
  { value: "0", label: "Extra logins for your team" },
];

export default function Performance() {
  return (
    <section id="performance" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Performance
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
            What it does on every lead.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {METRICS.map((m) => (
            <div key={m.label} data-reveal className="px-6 text-center">
              <p className="font-display text-4xl font-medium leading-none tracking-tight text-hot lg:text-[2.75rem]">
                {m.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial — bring this back when you have a real one.
        <div data-reveal className="mx-auto mt-20 max-w-3xl text-center">
          <p className="font-display text-xl leading-relaxed text-paper sm:text-2xl">
            &ldquo;Testimonial from your first pilot client goes here — a specific
            before/after comment works better than general praise.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-10 w-10 rounded-full border border-line bg-ink/60" />
            <div className="text-left">
              <p className="text-sm font-medium text-paper">Client name, business</p>
              <p className="font-mono text-xs text-faint">pilot client</p>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
