import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const PHASES = [
  {
    n: "01",
    tag: "Before we talk",
    title: "Research",
    glow: "border-cold/40",
    dot: "bg-cold",
    copy: "Before any outreach, we look at how your business actually handles a new lead today — your contact form, your Google Business profile, your response-time claims, if any. This is what makes the first conversation specific instead of generic.",
    points: [
      "One real observation about your current lead response, not a template guess",
      "Confirms there's an active decision-maker to talk to before we reach out",
    ],
  },
  {
    n: "02",
    tag: "The call",
    title: "Discovery",
    glow: "border-warm/40",
    dot: "bg-warm",
    copy: "A short call — usually 15 minutes — to understand your lead flow as it actually works, not how a demo assumes it works. This is the only fact-finding step before anything gets built.",
    points: [
      "When a lead comes in, who sees it first, and how long a reply usually takes",
      "Roughly how many new leads you get a week",
      "Where you already track leads — a spreadsheet, a CRM, or mostly memory",
      "Which channels leads actually arrive on: website, Instagram, Facebook, WhatsApp",
    ],
  },
  {
    n: "03",
    tag: "Behind the scenes",
    title: "Scoping the build",
    glow: "border-warm/40",
    dot: "bg-warm",
    copy: "What you told us on the call decides the shape of the system — not the other way around. We don't sell a fixed package and make your business fit it.",
    points: [
      "One-shot reply only, or a follow-up sequence over 1–2 weeks if leads tend to go quiet",
      "One channel, or several, if leads already arrive on more than one",
      "Your existing spreadsheet, Excel file, or CRM as the destination — never a new tool you have to adopt",
    ],
  },
  {
    n: "04",
    tag: "Before you commit",
    title: "Demo & proposal",
    glow: "border-hot/40",
    dot: "bg-hot",
    copy: "You see the system work — either a recorded demo or a live test submission — before any pricing conversation happens. The proposal is built from what the call actually surfaced, not a generic quote.",
    points: [
      "A real submission scored and replied to in front of you",
      "Pricing anchored to what a slow reply is actually costing you, not a flat rate off a card",
      "No pressure to decide on the call — a pilot is always the lower-commitment option",
    ],
  },
  {
    n: "05",
    tag: "The build",
    title: "Build & test",
    glow: "border-hot/40",
    dot: "bg-hot",
    copy: "Once you're in, we clone a working template and adapt it to your fields, tone, and tools — we're not building from a blank page each time, which is what keeps this affordable. Typical build time is about a week.",
    points: [
      "Connected to your own inbox, your own sheet or CRM — never ours",
      "Stress-tested on varied sample leads before it ever touches a real one",
      "Walked through live on a screen-share so you see it run before it goes live",
    ],
  },
  {
    n: "06",
    tag: "Proof, not promises",
    title: "Pilot period",
    glow: "border-hot/40",
    dot: "bg-hot",
    copy: "The system runs on real leads for a short period before we call it done. We'd rather show you results than ask you to trust a claim.",
    points: [
      "A few days of live results — actual response times, actual replies sent",
      "You can compare it directly against how leads were handled before",
      "Nothing scales up in price or scope until you've seen it work",
    ],
  },
  {
    n: "07",
    tag: "Ongoing",
    title: "Handover & support",
    glow: "border-cold/40",
    dot: "bg-cold",
    copy: "You don't get a login to a workflow tool you'll never touch — you get the outcome, and one point of contact for anything that needs to change.",
    points: [
      "You keep full ownership of your own inbox, sheet, and CRM data at all times",
      "Any change to tone, timing, or logic goes through us — not a support ticket queue",
      "If you ever leave, we disconnect our access and nothing else in your systems is affected",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-ink">
      <Nav />
      <section className="bg-noise border-b border-line px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            How we work
          </p>
          <h1 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-paper sm:text-5xl">
            From a first conversation to a system running on your leads.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            No two businesses get the same build sight-unseen. Here's the exact
            sequence we follow — what happens on a call, what gets built, and
            what you can expect before anything goes live on real leads.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          {PHASES.map((phase, i) => (
            <div key={phase.n} className="relative flex gap-6 pb-14 last:pb-0">
              {i < PHASES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[19px] top-11 h-[calc(100%-2rem)] w-px bg-line"
                />
              )}
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-panel font-mono text-xs text-paper ${phase.glow}`}
              >
                <span
                  className={`absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full ${phase.dot}`}
                />
                {phase.n}
              </div>

              <div className="flex-1 pt-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {phase.tag}
                </p>
                <h2 className="mt-1 font-display text-2xl font-700 text-paper">
                  {phase.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {phase.copy}
                </p>
                <ul className="mt-4 space-y-2">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-panel/60 p-9 text-center">
          <h3 className="font-display text-2xl font-700 text-paper">
            Ready to see where your lead flow stands?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            The first step is always the same — a short call to look at how
            leads reach you today.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-block rounded-full bg-hot px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Book a 15-minute call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
