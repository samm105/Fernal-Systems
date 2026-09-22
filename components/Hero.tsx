import SignalDemo from "./SignalDemo";

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="bg-noise relative overflow-hidden border-b border-line pt-36 pb-24"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              AI systems for SMBs & growing businesses
            </p>
            <h1 className="font-display text-[2.6rem] font-700 leading-[1.05] tracking-tight text-paper sm:text-[3.4rem]">
              Systems that catch what your team
              <br />
              doesn&apos;t have time to <span className="text-hot">chase</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Fernal Systems designs and builds the AI layer behind your
              operations — reading what comes in, deciding what matters, and
              acting on it immediately, whether that&apos;s a lead, a listing,
              or a signal your team would otherwise miss.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-hot px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                Book a 15-minute call
              </a>
              <a
                href="#demo"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition hover:border-paper"
              >
                See a system in action
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-faint">
              <span>WORKS WITH YOUR EXISTING TOOLS</span>
              <span>NO NEW SOFTWARE TO LEARN</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-end">
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              One system, live — lead response
            </p>
            <SignalDemo />
          </div>
        </div>
      </section>
    </>
  );
}
