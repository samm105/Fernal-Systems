import SignalDemo from "./SignalDemo";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-noise relative overflow-hidden border-b border-line pt-36 pb-24"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #2DD4BF 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            AI response systems for service businesses
          </p>
          <h1 className="font-display text-[2.6rem] font-700 leading-[1.05] tracking-tight text-paper sm:text-[3.4rem]">
            Every lead gets answered
            <br />
            before it goes <span className="text-hot">cold</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Fernal Systems builds the response layer behind your contact form
            and inbox. Every new lead is read, scored, and answered in under 90
            seconds — then logged wherever you already keep track of your leads.
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
              Watch the 60-second demo
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-faint">
            <span>NO NEW CRM REQUIRED</span>
            <span>YOUR GMAIL, YOUR SHEET</span>
            <span>&lt; 90 SECOND FIRST REPLY</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <SignalDemo />
        </div>
      </div>
    </section>
  );
}
