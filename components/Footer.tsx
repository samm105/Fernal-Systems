export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-hot" />
          <span className="font-display text-paper">Fernal Systems</span>
        </div>
        <p className="font-mono text-xs">© {new Date().getFullYear()} Fernal Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
