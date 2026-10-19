import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuditOffer from "@/components/AuditOffer";
import CustomBuilds from "@/components/work/CustomBuilds";
import SystemArticle from "@/components/work/SystemArticle";
import {
  INDUSTRIES,
  INDUSTRY_ORDER,
  systemsFor,
  type Industry,
} from "@/components/work/systems";

export default function IndustryWork({ industry }: { industry: Industry }) {
  const info = INDUSTRIES[industry];
  const systems = systemsFor(industry);
  const others = INDUSTRY_ORDER.filter((i) => i !== industry);

  return (
    <main className="bg-ink">
      <Nav />

      <section className="bg-noise border-b border-line px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[0.2em] text-faint transition hover:text-paper"
          >
            ← All Systems
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {info.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-paper sm:text-5xl">
            {info.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {info.intro}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-20">
          {systems.map((system) => (
            <SystemArticle key={system.id} system={system} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl border-t border-line pt-8 text-sm text-muted">
          Looking for a different industry?{" "}
          {others.map((slug) => (
            <Link
              key={slug}
              href={INDUSTRIES[slug].href}
              className="text-hot underline underline-offset-4"
            >
              See {INDUSTRIES[slug].name} →
            </Link>
          ))}
        </div>
      </section>

      <CustomBuilds />

      <div id="audit" className="scroll-mt-28" />
      <AuditOffer />

      <Footer />
    </main>
  );
}
