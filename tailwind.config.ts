import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F3F2EE",
        panel: "#F8F7F3",
        "panel-raised": "#F1EFEA",
        line: "#E7E5E0",
        paper: "#151817",
        muted: "#6F716D",
        faint: "#9A9C97",
        hot: "#164322",
        warm: "#3F7650",
        cold: "#8C9A90",
        pale: "#E4ECE5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(21,24,23,0.05) 1px, transparent 0)",
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
          "0%, 100%": { backgroundColor: "transparent", borderColor: "#E7E5E0" },
          "15%": { backgroundColor: "#E4ECE5", borderColor: "#8C9A90" },
          "35%": { backgroundColor: "transparent", borderColor: "#E7E5E0" },
        },
        "glow-warm": {
          "0%, 100%": { backgroundColor: "transparent", borderColor: "#E7E5E0" },
          "15%": { backgroundColor: "#E4ECE5", borderColor: "#3F7650" },
          "35%": { backgroundColor: "transparent", borderColor: "#E7E5E0" },
        },
        "glow-hot": {
          "0%, 100%": { backgroundColor: "transparent", borderColor: "#E7E5E0" },
          "15%": { backgroundColor: "#E4ECE5", borderColor: "#164322" },
          "35%": { backgroundColor: "transparent", borderColor: "#E7E5E0" },
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