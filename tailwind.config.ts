import type { Config } from "tailwindcss";

/**
 * Addem Capital brand tokens (AC_Brandboard — Socker-Studio)
 * Verde Oscuro #0D473D · Verde Acento #B0EBC2 · Carbón #1F1F1F
 * Gris #CFCFCF · Off-White #F7F7F7
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: "#07211c",
          900: "#0a382f",
          800: "#0d473d",
          700: "#115a4d",
          600: "#1a6f5f",
          300: "#6fbfa6",
        },
        mint: {
          300: "#b0ebc2",
          200: "#cdf2d8",
          100: "#e4f8ea",
        },
        charcoal: "#1f1f1f",
        offwhite: "#f7f7f7",
        // Dark-mode surfaces derived from Carbón, pulled toward the green world
        night: {
          DEFAULT: "#0a0e0d",
          soft: "#0e1412",
          card: "#101715",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.02em",
        eyebrow: "0.18em",
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        lift: "0 8px 30px rgba(0, 0, 0, 0.35)",
        glow: "0 0 60px rgba(176, 235, 194, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
