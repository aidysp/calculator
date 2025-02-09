/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
      height: {
        "screen/5": "5vh",

        "screen/10": "10vh",
        "screen/20": "20vh",
        "screen/30": "30vh",
        "screen/40": "40vh",
        "screen/50": "50vh",
        "screen/60": "60vh",
        "screen/70": "70vh",
        "screen/80": "80vh",
        "screen/90": "90vh",
        "screen/100": "100vh",
      },
      width: {
        "screen/5": "5vw",

        "screen/10": "10vw",

        "screen/20": "20vw",
        "screen/30": "30vw",
        "screen/40": "40vw",
        "screen/50": "50vw",
        "screen/60": "60vw",
        "screen/70": "70vw",
      },
    },
  },
  plugins: [scrollbarHide],
};
