import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-700 tracking-tight text-paper"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-hot" />
          Fernal Systems
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="/#how-it-works" className="transition hover:text-paper">
            How it works
          </Link>
          <Link href="/process" className="transition hover:text-paper">
            Our process
          </Link>
          <Link href="/#proof" className="transition hover:text-paper">
            Proof
          </Link>
          <Link href="/#faq" className="transition hover:text-paper">
            FAQ
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition hover:bg-hot hover:text-ink"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
