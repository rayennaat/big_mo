import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moRed: "#ef1b16",
        moDarkRed: "#8d0606",
        moCream: "#f6eddb",
        moBlack: "#0b0b0b",
        moYellow: "#ffd84a",
        moWood: "#b96d35"
      },
      boxShadow: {
        neon: "0 0 12px rgba(239,27,22,.75), 0 0 36px rgba(239,27,22,.35)",
        card: "0 22px 60px rgba(0,0,0,.18)"
      },
      fontFamily: {
        display: ["Arial Black", "Impact", "sans-serif"],
        body: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
