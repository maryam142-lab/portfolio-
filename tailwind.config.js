/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#F5F1FF",
        lightPurple: "#F8EDEB",
        violet: "#CDB4DB",
        lilac: "#B8A4C9",
        "muted-lavender": "#E6D9FF",
        ink: "#2B2D42",
        body: "#4A4A4A",
        muted: "#6D667A",
        "soft-border": "#E6DFF5",
        "dark-bg": "#0F0B1E",
        "dark-card": "#1A1230",
        "dark-accent": "#B18CFF",
        "dark-lavender": "#D6C6FF",
        "dark-muted": "#9A8BC2"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(205, 180, 219, 0.15)",
        softHover: "0 15px 35px rgba(205, 180, 219, 0.25)",
        glow: "0 0 28px rgba(168, 85, 247, 0.35)"
      }
    }
  },
  plugins: []
};

