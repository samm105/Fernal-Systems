import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuditOffer from "@/components/AuditOffer";
import CustomBuilds from "@/components/work/CustomBuilds";
import {
  HONESTY_NOTE,
  INDUSTRIES,
  INDUSTRY_ORDER,
  systemsFor,
} from "@/components/work/systems";

export default function WorkPage() {
  return (
    <main className="bg-ink">
      <Nav />

      <section className="bg-noise border-b border-line px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Our work
          </p>
          <h1 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-paper sm:text-5xl">
            Systems we&apos;ve built, and who they&apos;re built for.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Pick your industry to see the systems made for it — the real problem
            each one solves, and the plain-language version of how it works.
          </p>
          <p className="mt-6 flex max-w-xl items-start gap-2.5 border-t border-line pt-6 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-hot" />
            <span>{HONESTY_NOTE}</span>
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {INDUSTRY_ORDER.map((slug) => {
            const info = INDUSTRIES[slug];
            const list = systemsFor(slug);
            return (
              <Link
                key={slug}
                href={info.href}
                data-reveal
                className="group flex flex-col rounded-2xl border border-line bg-panel/60 p-8 transition hover:border-hot/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {list.length} systems
                </p>
                <h2 className="mt-3 font-display text-2xl font-700 text-paper sm:text-3xl">
                  {info.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {info.summary}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {list.map((s) => (
                    <li
                      key={s.id}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hot" />
                      <span>{s.title}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 text-sm text-hot underline-offset-4 group-hover:underline">
                  See the systems →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CustomBuilds />

      <div id="audit" className="scroll-mt-28" />
      <AuditOffer />

      <Footer />
    </main>
  );
}
