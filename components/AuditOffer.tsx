"use client";

import { useState } from "react";

// Reuse your existing Formspree endpoint from ContactCTA.tsx, or create a
// second free Formspree form if you'd rather keep audit requests in a
// separate inbox view. Either works — same free tier, same setup.
const FORMSPREE_URL = process.env.NEXT_PUBLIC_YOUR_FORM_URL ?? "";

export default function AuditOffer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!FORMSPREE_URL) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          business,
          // Lets you filter/scan this apart from general contact-form leads
          _subject: "New $99 Audit request — Fernal Systems",
          type: "audit_request",
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-b border-line bg-panel/30 px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Not ready for a full build?
          </p>
          <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
            Start with the <span className="text-hot">$99 Audit.</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            A 30-minute teardown of how your leads are handled today, plus a
            written, prioritized roadmap of what's worth automating first — no
            build, no commitment.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Full credit toward any build if you move forward",
              "A written roadmap either way, yours to keep",
              "No card required to request it — we'll confirm details by email",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hot" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {status === "sent" ? (
          <div className="rounded-2xl border border-line bg-panel/60 p-8 text-center">
            <p className="font-display text-lg text-paper">Request received.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We'll reply within 1 business day to confirm a time and sort out
              payment.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-panel/60 p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted">
                  Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-paper outline-none focus:border-hot"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted">
                  Business
                </label>
                <input
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-paper outline-none focus:border-hot"
                  placeholder="Business name"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-paper outline-none focus:border-hot"
                  placeholder="you@business.com"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full bg-hot px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Request the Audit — $99"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-center font-mono text-[11px] text-hot">
                Something went wrong — try again, or email directly instead.
              </p>
            )}
            <p className="mt-3 text-center font-mono text-[11px] text-muted">
              No payment is taken here — we'll follow up by email to confirm and
              arrange it.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
