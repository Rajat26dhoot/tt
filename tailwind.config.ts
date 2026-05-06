import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070914",
        cloud: "#f7f8ff",
        electric: "#4f8cff",
        violet: "#8b5cf6",
        cyan: "#2dd4bf",
        graphite: "#111827"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(79, 140, 255, 0.35)",
        "violet-glow": "0 0 80px rgba(139, 92, 246, 0.35)"
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(135deg, rgba(79,140,255,.95), rgba(139,92,246,.9) 55%, rgba(45,212,191,.85))"
      }
    }
  },
  plugins: []
};

export default config;
