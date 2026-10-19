export default function Statement() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-3xl font-700 leading-tight tracking-tight text-paper sm:text-4xl">
          You run your business.
          <br />
          This <span className="text-hot">runs in the background.</span>
        </p>
        <div
          aria-hidden
          className="mx-auto mt-10 flex max-w-md items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint"
        >
          <span>Input</span>
          <span className="h-px flex-1 bg-line" />
          <span>Intelligence</span>
          <span className="h-px flex-1 bg-line" />
          <span>Action</span>
          <span className="h-px flex-1 bg-line" />
          <span>Outcome</span>
        </div>
      </div>
    </section>
  );
}
