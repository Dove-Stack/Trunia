import iconify from "@iconify/tailwind4";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        "card-light": "0px 4px 4px 0px rgb(145, 158, 171)",
      },
    },
  },

  plugins: [iconify()],

  safelist: [
    {
      pattern: /icon-\[.*?\]/,
    },
  ],
};
