"use client";

import { useState } from "react";

// Swap this for your Calendly (or similar) booking link once you have one.
const BOOKING_URL = "";
const CONTACT_EMAIL = "samarth.saxena2002@gmail.com";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const formUrl = process.env.NEXT_PUBLIC_YOUR_FORM_URL;
      if (!formUrl) {
        setStatus("error");
        return;
      }

      const res = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, business, email, message }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Get started
          </p>
          <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
            Let's look at your lead flow.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            A 15-minute call is enough to tell if this fits your business. No
            deck, no pressure — just your current process and what's slowing it
            down.
          </p>

          {BOOKING_URL ? (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-hot px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Book a 15-minute call
            </a>
          ) : (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-block rounded-full bg-hot px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Email to book a call
            </a>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-panel/60 p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="font-mono text-xs uppercase tracking-widest text-faint">
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
            <div className="sm:col-span-1">
              <label className="font-mono text-xs uppercase tracking-widest text-faint">
                Business
              </label>
              <input
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-paper outline-none focus:border-hot"
                placeholder="Business name"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-mono text-xs uppercase tracking-widest text-faint">
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
            <div className="sm:col-span-2">
              <label className="font-mono text-xs uppercase tracking-widest text-faint">
                What's slowing down your leads?
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-2 w-full resize-none rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-paper outline-none focus:border-hot"
                placeholder="A sentence or two is plenty"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-hot"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          <p className="mt-3 text-center font-mono text-[11px] text-faint">
            {status === "sent" && "Message sent — I'll get back to you soon."}
            {status === "error" &&
              "Something went wrong — try emailing directly instead."}
            {status === "idle" || status === "sending"
              ? "Sent directly, no email client required."
              : null}
          </p>
        </form>
      </div>
    </section>
  );
}
