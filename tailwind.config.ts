import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wellqc: {
          dark: "#0b0f17",
          panel: "#131b2e",
          card: "#182238",
          border: "#233252",
          accent: "#3b82f6",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#ef4444",
          violet: "#8b5cf6",
          text: "#f1f5f9",
          muted: "#94a3b8"
        }
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "Courier New", "monospace"],
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"]
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 2px rgba(6, 182, 212, 0.1))' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
};
export default config;
