"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Do I need to switch CRMs or spreadsheets?",
    a: "No. The system connects to whatever you already use — Google Sheets, Excel, Airtable, or an existing CRM. If you don't track leads anywhere yet, we set up a simple sheet for you.",
  },
  {
    q: "Does it send from my own email?",
    a: "Yes. Replies go out from your business's own inbox, not a third-party address, so leads see a response that looks and feels like it came from your team.",
  },
  {
    q: "What happens with leads that aren't serious buyers?",
    a: "They still get a reply — just a lower-pressure one. Nothing gets ignored, and nothing gets a pushy sales pitch it doesn't need.",
  },
  {
    q: "How long does setup take?",
    a: "Most pilots are live within a week: a short call to understand your current lead flow, then the system is built and tested before it ever touches a real lead.",
  },
  {
    q: "Is my data used to train anything?",
    a: "No. Lead messages are only used to score and draft a reply for that lead — nothing is stored beyond the record that lands in your own sheet or CRM.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line bg-panel/30 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">FAQ</p>
        <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          Questions worth answering upfront.
        </h2>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-base text-paper sm:text-lg">{item.q}</span>
                  <span
                    className={`shrink-0 font-mono text-lg text-faint transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-xl text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
