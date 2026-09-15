// Video slot with a fallback: pass a real video URL once recorded, and until
// then it shows a sample record from the system's actual tracked data —
// not a repeat of the step list already shown alongside it.
//
// Self-hosted files (.mp4/.webm/.mov, e.g. "/Broker-Brain-demo.mp4" in /public)
// render through a native <video> tag. Anything else (Loom, YouTube, etc.)
// renders through an <iframe> embed.

const SELF_HOSTED_EXTENSIONS = [".mp4", ".webm", ".mov"];

type SnapshotField = {
  label: string;
  value: string;
  signal?: "hot" | "warm" | "cold";
};

type Snapshot = {
  filename: string;
  fields: SnapshotField[];
};

const SIGNAL_DOT: Record<string, string> = {
  hot: "bg-hot",
  warm: "bg-warm",
  cold: "bg-cold",
};

export default function VideoEmbed({
  title,
  videoUrl,
  snapshot,
}: {
  title: string;
  videoUrl: string;
  snapshot?: Snapshot;
}) {
  if (videoUrl) {
    const isSelfHosted = SELF_HOSTED_EXTENSIONS.some((ext) =>
      videoUrl.toLowerCase().endsWith(ext),
    );

    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-line bg-panel">
        {isSelfHosted ? (
          <video
            src={videoUrl}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={videoUrl}
            title={title}
            allow="autoplay; fullscreen"
            className="h-full w-full"
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-xl border border-line bg-panel/80">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-faint" />
          <span className="h-1.5 w-1.5 rounded-full bg-faint" />
          <span className="h-1.5 w-1.5 rounded-full bg-faint" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
          {snapshot?.filename ?? "record.json"}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-3.5 px-6 py-8">
        {(snapshot?.fields ?? []).map((field) => (
          <div
            key={field.label}
            className="flex items-start justify-between gap-4"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
              {field.label}
            </span>
            <span className="flex items-center gap-2 text-right font-mono text-sm text-paper">
              {field.signal && (
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${SIGNAL_DOT[field.signal]}`}
                />
              )}
              {field.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
          Sample record — full walkthrough video coming soon
        </p>
      </div>
    </div>
  );
}
