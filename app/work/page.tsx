import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/work/VideoEmbed";

const SYSTEMS = [
  {
    tag: "Any inbound-heavy business",
    title: "Lead Response System",
    problem:
      "Most businesses take hours to send a first reply to a new lead — sometimes longer overnight or over a weekend. By the time someone gets back to a prospect, they've often already gone with whoever answered first.",
    solution:
      "Every inbound lead is read, scored, and answered from your own inbox in under 90 seconds, then logged wherever you already track leads. Your team gets pinged the moment a serious one comes in.",
    steps: [
      "Capture — a lead arrives through your form, DM, or quote request",
      "Score — the system rates how serious it is, the way a good salesperson would",
      "Respond — a personalized reply goes out, logged automatically",
      "Notify — the right person gets pinged with the lead's details and score",
    ],
    video: "",
    homepageLink: true,
    snapshot: {
      filename: "lead_record.json",
      fields: [
        { label: "Name", value: "R. Alvarez" },
        {
          label: "Message",
          value: '"Roof\'s leaking, need someone this week"',
        },
        { label: "Budget mentioned", value: "$4,000–6,000" },
        { label: "Score", value: "HOT", signal: "hot" as const },
        { label: "Reply sent", value: "in 41 seconds" },
        { label: "Logged to", value: "Leads sheet, row added" },
      ],
    },
  },
  {
    tag: "Lead Response — Growth tier add-on",
    title: "Automated Follow-Up & Reply Detection",
    problem:
      "A lead that doesn't reply to the first message usually just goes cold. Nobody has time to track who's still owed a follow-up, or to notice the moment someone finally writes back.",
    solution:
      "If a lead stays quiet, the system sends a fresh follow-up with a different angle over the following week or two — and checks for a reply before every send, so the sequence stops the instant someone writes back.",
    steps: [
      "Track — every lead that hasn't replied yet is watched on a schedule",
      "Check — before sending anything, it looks for a real reply first",
      "Follow up — a new message goes out, never a repeat of the last one",
      "Stop — a reply at any point ends the sequence immediately, no exceptions",
    ],
    video: "",
    homepageLink: true,
    snapshot: {
      filename: "followup_state.json",
      fields: [
        {
          label: "Lead A · stage",
          value: "0 → due in 1 day",
          signal: "cold" as const,
        },
        {
          label: "Lead B · stage",
          value: "1 → due in 3 days",
          signal: "warm" as const,
        },
        {
          label: "Lead C · stage",
          value: "1 → replied",
          signal: "hot" as const,
        },
        { label: "Lead C · sequence", value: "stopped, no further sends" },
      ],
    },
  },
  {
    tag: "Real estate — buyer enquiries",
    title: "Broker Brain",
    problem:
      "In real estate, whoever replies first — with something real — usually wins the buyer's attention. Most agencies are either slow, or fast but generic, because nobody has time to check actual inventory before hitting send.",
    solution:
      "Reads a buyer's enquiry, even a casual mix of languages, pulls out what they're actually asking for, checks it against real current inventory, and replies with a specific, honest shortlist — or asks for whatever's missing if there isn't enough to search on yet.",
    steps: [
      "Understand — reads the enquiry and extracts what's actually being asked for",
      "Match — checks it against real, current inventory, not a canned list",
      "Reply — sends a specific reply in the buyer's own language and tone",
      "Brief the agent — a short call-prep note: what to lead with, likely objections, what to ask",
    ],
    video: "https://www.youtube.com/embed/bAeY8D1ZUdo",
    homepageLink: false,
    snapshot: {
      filename: "buyer_match.json",
      fields: [
        { label: "Enquiry", value: '"2bhk chahiye Wakad ya Baner, 75L tak"' },
        { label: "Extracted", value: "2BHK · ₹75L · Wakad/Baner" },
        { label: "Matched", value: "3 properties found" },
        { label: "Grade", value: "HOT", signal: "hot" as const },
        { label: "Agent briefed", value: "yes — call-prep sent" },
      ],
    },
  },
  {
    tag: "Real estate — listings & backlog",
    title: "Reverse-Match Engine",
    problem:
      "Every agency has a graveyard of old leads — buyers who enquired months ago and went quiet because nothing on the market fit at the time. Nobody has time to recheck every old enquiry every time a new listing comes in.",
    solution:
      "Runs quietly in the background. Every time a new listing goes live, it's checked against every buyer ever logged — not just recent ones — and the agent gets a ready-to-send outreach message for anyone who's a genuine fit.",
    steps: [
      "Watch — a new listing gets added the way it always would",
      "Re-check — it's compared against your entire buyer history, not just this week's leads",
      "Draft outreach — a short, specific message is written for anyone who's a real fit",
      "Never repeat — each match is logged, so no buyer is pinged twice about the same listing",
    ],
    video: "",
    homepageLink: false,
    snapshot: {
      filename: "reverse_match.json",
      fields: [
        { label: "New listing", value: "2BHK, Wakad, ₹72L" },
        { label: "Checked against", value: "148 past buyers" },
        { label: "Match found", value: "1 buyer, enquired 6 months ago" },
        { label: "Outreach", value: "drafted, ready to send" },
        { label: "Repeat alerts", value: "0 — logged, won't fire twice" },
      ],
    },
  },
];

export default function WorkPage() {
  return (
    <main className="bg-ink">
      <Nav />

      <section className="bg-noise border-b border-line px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Our work
          </p>
          <h1 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-paper sm:text-5xl">
            Systems we&apos;ve built, and what they actually do.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Every business here is different, so every system is a different
            shape. Below is the real problem each one solves, and the
            plain-language version of how it works.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-20">
          {SYSTEMS.map((system) => (
            <article
              key={system.title}
              className="grid grid-cols-1 gap-10 border-b border-line pb-20 last:border-0 last:pb-0 lg:grid-cols-[1fr_1fr]"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {system.tag}
                </p>
                <h2 className="mt-3 font-display text-2xl font-700 text-paper sm:text-3xl">
                  {system.title}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    The problem —{" "}
                  </span>
                  {system.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    What it does —{" "}
                  </span>
                  {system.solution}
                </p>

                {system.homepageLink && (
                  <Link
                    href="/#demo"
                    className="mt-5 inline-block text-sm text-hot underline underline-offset-4"
                  >
                    Watch the full demo on the homepage →
                  </Link>
                )}

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {system.steps.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hot" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <VideoEmbed
                title={`${system.title} demo`}
                videoUrl={system.video}
                snapshot={system.snapshot}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-panel/60 p-9 text-center">
          <h3 className="font-display text-2xl font-700 text-paper">
            Have a different workflow in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            These are examples, not the whole list. If something in your
            business is slow, manual, or easy to forget, it's worth a
            conversation.
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
