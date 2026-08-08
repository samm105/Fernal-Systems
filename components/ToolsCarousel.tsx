// components/ToolsCarousel.tsx
import {
  Workflow,
  GitFork,
  Sparkles,
  ListChecks,
  Table2,
  Mail,
  MessageSquare,
  Target,
} from "lucide-react";

type StackItem = {
  name: string;
  Icon: typeof Workflow;
  color: string;
};

const STACK: StackItem[] = [
  { name: "Make.com", Icon: Workflow, color: "#8B5CF6" },
  { name: "n8n", Icon: GitFork, color: "#EA4B71" },
  { name: "Claude API", Icon: Sparkles, color: "#D97757" },
  { name: "Tally", Icon: ListChecks, color: "#E9ECF1" },
  { name: "Google Sheets", Icon: Table2, color: "#22C55E" },
  { name: "Gmail", Icon: Mail, color: "#EF4444" },
  { name: "Slack", Icon: MessageSquare, color: "#A855F7" },
  { name: "HubSpot", Icon: Target, color: "#F59E0B" },
];

const LOOP = [...STACK, ...STACK];

export default function ToolsCarousel() {
  return (
    <section className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Built with
        </p>
        <h2 className="mt-3 text-center font-display text-2xl font-700 text-paper sm:text-3xl">
          The stack behind every system
        </h2>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />

          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {LOOP.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-xl border border-line bg-panel/60 px-5 py-3.5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${tool.color}1A` }}
                >
                  <tool.Icon
                    size={17}
                    style={{ color: tool.color }}
                    strokeWidth={2}
                  />
                </span>
                <span className="font-display text-sm text-paper">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
