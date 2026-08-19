import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080B12",
        panel: "#111820",
        "panel-raised": "#182029",
        line: "#233039",
        paper: "#E9F2F1",
        muted: "#8FA3A2",
        faint: "#56696B",
        hot: "#2DD4BF",
        warm: "#5EEAD4",
        cold: "#38BDF8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(233,242,241,0.06) 1px, transparent 0)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-cold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(56,189,248,0)", borderColor: "#233039" },
          "15%": { boxShadow: "0 0 28px 2px rgba(56,189,248,0.35)", borderColor: "#38BDF8" },
          "35%": { boxShadow: "0 0 0 0 rgba(56,189,248,0)", borderColor: "#233039" },
        },
        "glow-warm": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(94,234,212,0)", borderColor: "#233039" },
          "15%": { boxShadow: "0 0 28px 2px rgba(94,234,212,0.35)", borderColor: "#5EEAD4" },
          "35%": { boxShadow: "0 0 0 0 rgba(94,234,212,0)", borderColor: "#233039" },
        },
        "glow-hot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(45,212,191,0)", borderColor: "#233039" },
          "15%": { boxShadow: "0 0 28px 2px rgba(45,212,191,0.4)", borderColor: "#2DD4BF" },
          "35%": { boxShadow: "0 0 0 0 rgba(45,212,191,0)", borderColor: "#233039" },
        },
        "dot-flow": {
          "0%": { transform: "translateX(-6px)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateX(22px)", opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.6s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
        "glow-cold": "glow-cold 4.5s ease-in-out infinite",
        "glow-warm": "glow-warm 4.5s ease-in-out infinite",
        "glow-hot": "glow-hot 4.5s ease-in-out infinite",
        "dot-flow": "dot-flow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;