import Link from "next/link";
import LiteYouTube from "@/components/video/LiteYoutube";
import { systemById } from "@/components/work/systems";

export default function DemoVideo() {
  const system = systemById("broker-brain");
  if (!system?.video) return null;

  return (
    <section id="demo" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          See it work
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          Broker Brain, start to finish.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          One of our systems, built for real-estate agencies: a buyer enquiry
          comes in, a specific reply with real inventory goes out.
        </p>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-panel">
          <LiteYouTube url={system.video} title="Broker Brain demo" />
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/work/real-estate"
            className="text-hot underline underline-offset-4"
          >
            Real-estate systems →
          </Link>
          <Link
            href="/work/service-businesses"
            className="text-hot underline underline-offset-4"
          >
            Service-business systems →
          </Link>
          <Link
            href="/work"
            className="text-muted underline underline-offset-4"
          >
            All work
          </Link>
        </div>
      </div>
    </section>
  );
}
