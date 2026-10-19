import Link from "next/link";
import VideoEmbed from "@/components/work/VideoEmbed";
import type { System } from "@/components/work/systems";

export default function SystemArticle({ system }: { system: System }) {
  const hasVideo = Boolean(system.video);

  return (
    <article
      data-reveal
      className="grid grid-cols-1 gap-10 border-b border-line pb-20 last:border-0 last:pb-0 lg:grid-cols-[1fr_1fr]"
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            {system.tag}
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-hot" />
            {hasVideo
              ? "Live system · demo video"
              : "Live system · demo on request"}
          </span>
        </div>

        <h2 className="mt-3 font-display text-2xl font-700 text-paper sm:text-3xl">
          {system.title}
        </h2>

        <p className="mt-5 text-sm leading-relaxed text-muted">
          <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
            The problem —{" "}
          </span>
          {system.problem}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
            What it does —{" "}
          </span>
          {system.solution}
        </p>

        <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
          {system.steps.map((step) => (
            <li
              key={step}
              data-reveal
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hot" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <VideoEmbed
        title={`${system.title} demo`}
        videoUrl={system.video}
        snapshot={system.snapshot}
      />
    </article>
  );
}
