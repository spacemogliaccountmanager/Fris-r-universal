import type { Config } from "tailwindcss";

export default {
  content: ["./client/src/**/*.{ts,tsx}", "./client/index.html"],
  theme: {
    extend: {
      colors: {
        bg: "#f7efe6",
        "bg-deep": "#efe3d7",
        ink: "#1c1814",
        "ink-soft": "#3a332d",
        muted: "#6f645a",
        accent: "#b58a5a",
        "accent-strong": "#9c7248",
        light: "#fffaf4",
        card: "#fff8f1",
        line: "rgba(28, 24, 20, 0.15)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', "serif"],
        sans: ['"Space Grotesk"', '"Trebuchet MS"', "sans-serif"],
      },
      borderRadius: {
        lg: "28px",
        md: "18px",
      },
      maxWidth: {
        site: "1180px",
      },
      screens: {
        xs: "480px",
      },
      boxShadow: {
        card: "0 28px 60px rgba(20, 16, 12, 0.18)",
        "card-sm": "0 18px 40px rgba(22, 18, 15, 0.12)",
        btn: "0 12px 28px rgba(181, 138, 90, 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
