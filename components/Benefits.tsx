const BENEFITS = [
  {
    signal: "hot" as const,
    title: "Nothing sits overnight",
    copy:
      "A lead that arrives at 11pm gets answered at 11pm. Response time stops depending on who's awake.",
  },
  {
    signal: "warm" as const,
    title: "Every lead gets a real read",
    copy:
      "Instead of one generic auto-reply, each message is judged on its own — serious buyer, casual browser, or just curious.",
  },
  {
    signal: "cold" as const,
    title: "Works with what you already use",
    copy:
      "Your inbox, your spreadsheet or CRM, your Slack. The system fits into your existing setup instead of replacing it.",
  },
  {
    signal: "hot" as const,
    title: "You keep every record",
    copy:
      "Every message, score, and reply is logged automatically, so nothing depends on someone remembering to write it down.",
  },
];

const DOT: Record<string, string> = { hot: "bg-hot", warm: "bg-warm", cold: "bg-cold" };

export default function Benefits() {
  return (
    <section className="border-b border-line bg-panel/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Why it matters</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          Built for how leads actually behave.
        </h2>

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className={`flex gap-4 border-line px-1 py-9 sm:px-8 ${
                i < 3 ? "border-b sm:border-b-0" : ""
              } ${i < 2 ? "sm:border-b" : ""} ${
                i % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${DOT[b.signal]}`} />
              <div>
                <h3 className="font-display text-lg font-700 text-paper">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
