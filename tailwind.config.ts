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
        line: "#C8CEC6",
        paper: "#151817",
        muted: "#6F716D",
        faint: "#9A9C97",
        hot: "#164322",
        warm: "#3F7650",
        cold: "#667B6B",
        pale: "#D7E3D8",
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
          "0%, 100%": {
            backgroundColor: "transparent",
            borderColor: "#C8CEC6",
            boxShadow: "0 0 0 rgba(102, 123, 107, 0)",
          },
          "15%": {
            backgroundColor: "#D7E3D8",
            borderColor: "#667B6B",
            boxShadow: "0 8px 24px rgba(102, 123, 107, 0.2)",
          },
          "35%": {
            backgroundColor: "transparent",
            borderColor: "#C8CEC6",
            boxShadow: "0 0 0 rgba(102, 123, 107, 0)",
          },
        },
        "glow-warm": {
          "0%, 100%": {
            backgroundColor: "transparent",
            borderColor: "#C8CEC6",
            boxShadow: "0 0 0 rgba(63, 118, 80, 0)",
          },
          "15%": {
            backgroundColor: "#D3E2D5",
            borderColor: "#3F7650",
            boxShadow: "0 8px 24px rgba(63, 118, 80, 0.2)",
          },
          "35%": {
            backgroundColor: "transparent",
            borderColor: "#C8CEC6",
            boxShadow: "0 0 0 rgba(63, 118, 80, 0)",
          },
        },
        "glow-hot": {
          "0%, 100%": {
            backgroundColor: "transparent",
            borderColor: "#C8CEC6",
            boxShadow: "0 0 0 rgba(22, 67, 34, 0)",
          },
          "15%": {
            backgroundColor: "#C9DCCB",
            borderColor: "#164322",
            boxShadow: "0 8px 24px rgba(22, 67, 34, 0.22)",
          },
          "35%": {
            backgroundColor: "transparent",
            borderColor: "#C8CEC6",
            boxShadow: "0 0 0 rgba(22, 67, 34, 0)",
          },
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