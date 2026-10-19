export type Industry = "real-estate" | "service-businesses";
export type Signal = "hot" | "warm" | "cold";

export type Snapshot = {
  filename: string;
  fields: { label: string; value: string; signal?: Signal }[];
};

export type System = {
  id: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  steps: string[];
  video: string;
  homepageLink?: boolean;
  snapshot: Snapshot;
  // Industry-specific wording for systems that appear in more than one place
  variants?: Partial<
    Record<
      Industry,
      Partial<Pick<System, "tag" | "problem" | "solution" | "snapshot">>
    >
  >;
};

export const INDUSTRIES: Record<
  Industry,
  {
    name: string;
    href: string;
    eyebrow: string;
    title: string;
    intro: string;
    summary: string;
  }
> = {
  "real-estate": {
    name: "Real estate",
    href: "/work/real-estate",
    eyebrow: "For Real estate businesses",
    title: "Systems built for real-estate agencies.",
    intro:
      "Faster, more specific first replies to buyer enquiries. Old leads rechecked every time a new listing goes live. And follow-up that doesn't let a quiet buyer go cold.",
    summary:
      "Reply to buyers with real inventory, revive old enquiries when a new listing fits, and keep following up on quiet leads.",
  },
  "service-businesses": {
    name: "Service businesses",
    href: "/work/service-businesses",
    eyebrow: "For Service businesses",
    title: "Lead response for service businesses.",
    intro:
      "For design studios, home-service trades and similar businesses where enquiries arrive by form or DM and the first reply often decides who wins the job.",
    summary:
      "Answer every inbound lead in under 90 seconds, then keep following up if they go quiet.",
  },
};

export const INDUSTRY_ORDER: Industry[] = ["real-estate", "service-businesses"];

// Order in which each industry page shows its systems.
const ORDER: Record<Industry, string[]> = {
  "real-estate": ["broker-brain", "reverse-match", "follow-up"],
  "service-businesses": ["lead-response", "follow-up"],
};

const SYSTEMS: System[] = [
  {
    id: "lead-response",
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
    video: "https://www.youtube.com/embed/XVdo85OUa0E",
    snapshot: {
      filename: "lead_record.json",
      fields: [
        { label: "Name", value: "R. Alvarez" },
        {
          label: "Message",
          value: '"Roof\'s leaking, need someone this week"',
        },
        { label: "Budget mentioned", value: "$4,000–6,000" },
        { label: "Score", value: "HOT", signal: "hot" },
        { label: "Reply sent", value: "in 41 seconds" },
        { label: "Logged to", value: "Leads sheet, row added" },
      ],
    },
  },
  {
    id: "follow-up",
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
    video: "https://www.youtube.com/embed/6-XTk8K8wb0",
    snapshot: {
      filename: "followup_state.json",
      fields: [
        { label: "Lead A · stage", value: "0 → due in 1 day", signal: "cold" },
        { label: "Lead B · stage", value: "1 → due in 3 days", signal: "warm" },
        { label: "Lead C · stage", value: "1 → replied", signal: "hot" },
        { label: "Lead C · sequence", value: "stopped, no further sends" },
      ],
    },
    variants: {
      "real-estate": {
        tag: "follow-up after the first reply",
        problem:
          "A buyer who doesn't reply to the first message usually drifts to another agent. Nobody has time to track who's still owed a follow-up, or to notice the moment a buyer finally writes back.",
        solution:
          "If a buyer stays quiet, the system sends a fresh follow-up with a different angle over the following week or two — and checks for a reply before every send, so the sequence stops the instant they write back.",
        snapshot: {
          filename: "followup_state.json",
          fields: [
            {
              label: "Buyer A · stage",
              value: "0 → due in 1 day",
              signal: "cold",
            },
            {
              label: "Buyer B · stage",
              value: "1 → due in 3 days",
              signal: "warm",
            },
            { label: "Buyer C · stage", value: "1 → replied", signal: "hot" },
            {
              label: "Buyer C · sequence",
              value: "stopped, no further sends",
            },
          ],
        },
      },
    },
  },
  {
    id: "broker-brain",
    tag: "buyer enquiries",
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
    snapshot: {
      filename: "buyer_match.json",
      fields: [
        { label: "Enquiry", value: '"2bhk chahiye Wakad ya Baner, 75L tak"' },
        { label: "Extracted", value: "2BHK · ₹75L · Wakad/Baner" },
        { label: "Matched", value: "3 properties found" },
        { label: "Grade", value: "HOT", signal: "hot" },
        { label: "Agent briefed", value: "yes — call-prep sent" },
      ],
    },
  },
  {
    id: "reverse-match",
    tag: "listings & backlog",
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
    video: "https://www.youtube.com/embed/lIRa1CeW-U4",
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

// Returns the systems for one industry, in display order, with any
// industry-specific wording applied.
export function systemsFor(industry: Industry): System[] {
  return ORDER[industry].flatMap((id) => {
    const base = SYSTEMS.find((s) => s.id === id);
    if (!base) return [];
    const { variants, ...rest } = base;
    return [{ ...rest, ...(variants?.[industry] ?? {}) }];
  });
}

// Shown on the /work index. Edit the wording to taste.
export const HONESTY_NOTE =
  "Every system here is built and running. The examples use sample data — none are live with a client yet, and we'd rather say that plainly.";

export function systemById(id: string): System | undefined {
  return SYSTEMS.find((s) => s.id === id);
}