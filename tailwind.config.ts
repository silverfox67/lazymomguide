import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "Newsreader",
          "Playfair Display",
          "Georgia",
          "Cambria",
          "serif",
        ],
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        cream: {
          50: "#FAF8F5",
          100: "#F5F2EB",
          200: "#EAE5D9",
          300: "#DAD2C1",
          400: "#B8AC94",
        },
        sage: {
          50: "#F2F6F3",
          100: "#E2ECE4",
          200: "#C5D8C9",
          300: "#9FBFA5",
          400: "#77A37F",
          500: "#55845E",
          600: "#416749",
          700: "#324E38",
          800: "#243729",
          900: "#17231A",
        },
        terracotta: {
          50: "#FDF6F2",
          100: "#F9ECE4",
          200: "#F2D5C4",
          300: "#E7B89F",
          400: "#D69371",
          500: "#C26D44",
          600: "#A65530",
          700: "#834123",
          800: "#5F2E18",
        },
        charcoal: {
          50: "#F6F7F7",
          100: "#EBEDEC",
          200: "#D6D9D8",
          300: "#B5BCBA",
          400: "#8D9693",
          500: "#6B7571",
          600: "#515A56",
          700: "#3E4542",
          800: "#2C312E",
          900: "#1A1D1B",
          950: "#0F1110",
        },
      },
    },
  },
  plugins: [],
};

export default config;
