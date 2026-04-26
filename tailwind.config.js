/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          // base
          bg: "#F7FAFC",
          bgSoft: "#EEF6F8",
          surface: "#FFFFFF",
          surfaceSoft: "#F2F8FA",

          // text
          dark: "#0B1F2A",
          ink: "#14242D",
          muted: "#6D7C86",
          pale: "#8EA0AA",

          // line
          line: "#DDE8ED",
          lineSoft: "#EDF4F7",

          // accent
          accent: "#46C7D8",
          accentDeep: "#168EA0",
          accentMint: "#7ADCBF",
          accentBlue: "#8EB7FF",

          // subtle background accents
          cyanSoft: "#E7FAFD",
          mintSoft: "#EAFBF5",
          blueSoft: "#EDF4FF",
        },
      },
      fontFamily: {
        en: ['"Space Grotesk"', "sans-serif"],
        jp: ['"IBM Plex Sans JP"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(20, 36, 45, 0.08)",
        glass: "0 20px 70px rgba(70, 199, 216, 0.16)",
        glow: "0 0 80px rgba(70, 199, 216, 0.22)",
      },
    },
  },
  plugins: [],
}