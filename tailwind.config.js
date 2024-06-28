/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        UncutSans: ["UncutSans", "sans-serif"],
      },
      dropShadow: {
        "socialMedia": "0px 1px 2px rgba(255, 255, 255, 0.25)",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
