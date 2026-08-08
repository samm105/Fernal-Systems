const USE_CASES = [
  {
    n: "01",
    title: "Real estate & brokerages",
    copy: "A portal lead at 9pm on a Friday gets scored and answered before Monday — not left for whoever checks the inbox first. First responder wins the deal more often than not.",
  },
  {
    n: "02",
    title: "Home services & contractors",
    copy: "Roofing, HVAC, and remodeling quote requests get a personalized reply in under 90 seconds, even when the owner is on-site and can't reach their phone.",
  },
  {
    n: "03",
    title: "Coaches & consultants",
    copy: "The budget field pre-qualifies leads before they ever reach a call, so a $2,000+ program owner isn't spending 30 minutes on a tire-kicker.",
  },
  {
    n: "04",
    title: "Multi-channel intake",
    copy: "Website form, Instagram DMs, Facebook Lead Ads, WhatsApp — every channel feeds the same system, so nothing depends on someone remembering to check three inboxes.",
  },
];

export default function UseCases() {
  return (
    <section className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-hot" />
          Use cases
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-700 leading-tight tracking-tight text-paper sm:text-4xl">
          Where the system <span className="text-hot">earns its keep.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Leads contacted within 5 minutes convert up to 9x more often than
          those left waiting — the businesses below feel that gap the most.
        </p>

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {USE_CASES.map((useCase, i) => (
            <div
              key={useCase.n}
              className={`border-line px-1 py-9 sm:px-8 ${
                i < 2 ? "border-b" : ""
              } ${i % 2 === 0 ? "sm:border-r" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-700 text-paper sm:text-2xl">
                  {useCase.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-faint">
                  {useCase.n}
                </span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {useCase.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
