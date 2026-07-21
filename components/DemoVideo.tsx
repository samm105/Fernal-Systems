const VIDEO_URL = "/SammAI-demo-1.mp4";

export default function DemoVideo() {
  return (
    <section id="demo" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          See it work
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          A 60-second walkthrough, start to finish.
        </h2>

        <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-panel">
          {VIDEO_URL ? (
            <video
              src={VIDEO_URL}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-noise">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-ink/60">
                <div
                  className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-paper"
                  aria-hidden
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-faint">
                Demo video recording in progress
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
