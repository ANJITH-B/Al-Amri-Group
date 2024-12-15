import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary100: "#B3CAD0",
        primary200: "#A2C0CA",
        primary300: "#3C2FC0",
      },
      fontFamily: {
        questrial: ['var(--font-questrial)'],
      },
      lineHeight: {
        '12': '3.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
