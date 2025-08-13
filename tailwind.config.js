/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [scrollbarHide],
};
