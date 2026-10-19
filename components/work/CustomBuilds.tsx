import Link from "next/link";

export default function CustomBuilds() {
  return (
    <section className="border-t border-line px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Beyond these systems
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          Custom builds, and a way to start small.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          These are the systems we've built so far, not the limit of what we do.
          Two ways to go further.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            data-reveal
            className="rounded-2xl border border-line bg-panel/60 p-8"
          >
            <h3 className="font-display text-xl font-700 text-paper">
              A system built around your workflow
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              If something in your business is slow, manual, or easy to forget,
              we scope a system around it. It starts with a 15-minute call about
              how your leads or enquiries actually work, not a fixed package.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-block text-sm text-hot underline underline-offset-4"
            >
              Book a 15-minute call →
            </Link>
          </div>

          <div
            data-reveal
            className="rounded-2xl border border-line bg-panel/60 p-8"
          >
            <h3 className="font-display text-xl font-700 text-paper">
              The $99 Audit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A 30-minute teardown of how your leads are handled today, plus a
              written roadmap of what's worth automating first. Full credit
              toward a build if you move forward.
            </p>
            <Link
              href="#audit"
              className="mt-6 inline-block text-sm text-hot underline underline-offset-4"
            >
              Request the audit ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
