// Self-hosted files (.mp4/.webm/.mov) render through a native <video> tag.
// Anything else (Loom, YouTube, etc.) renders through an <iframe> embed.
const SELF_HOSTED_EXTENSIONS = [".mp4", ".webm", ".mov"];

const VIDEOS = [
  {
    title: "A 60-second walkthrough, start to finish.",
    url: "/SammAI-demo-1.mp4",
  },
  {
    title: "",
    url: "https://www.loom.com/embed/07dac2acc01e49a384db3aa6f2f89dad",
  },
];

export default function DemoVideo() {
  return (
    <section id="demo" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          See it work
        </p>
        {VIDEOS.map((video, index) => {
          const isSelfHosted = SELF_HOSTED_EXTENSIONS.some((ext) =>
            video.url.toLowerCase().endsWith(ext),
          );

          return (
            <div key={video.url} className={index === 0 ? "mt-10" : "mt-16"}>
              <h2 className="max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
                {video.title}
              </h2>

              <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-panel">
                {isSelfHosted ? (
                  <video
                    src={video.url}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="h-full w-full"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
