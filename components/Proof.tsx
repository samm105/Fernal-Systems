// Replace the placeholder quote and metrics below once your first pilot client
// gives you a real before/after number and a testimonial.

const METRICS = [
  {
    value: "6 hrs → 90 sec",
    label: "typical first-reply time, before and after",
  },
  { value: "100%", label: "of inbound leads read and scored, no exceptions" },
  { value: "0", label: "extra logins for the client's team" },
];

export default function Proof() {
  return (
    <section id="proof" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Proof
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          Early results from the first pilot.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-panel/60 p-6"
              >
                <p className="font-mono text-2xl font-medium text-hot">
                  {m.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="flex flex-col justify-between rounded-2xl border border-line bg-panel/60 p-8">
            <p className="font-display text-xl leading-relaxed text-paper sm:text-2xl">
              &ldquo;Testimonial from your first pilot client goes here — a specific before/after
              comment works better than general praise.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full border border-line bg-ink/60" />
              <div>
                <p className="text-sm font-medium text-paper">Client name, business</p>
                <p className="font-mono text-xs text-faint">pilot client · placeholder</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
