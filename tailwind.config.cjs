import iconify from "@iconify/tailwind4";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"', // quotes needed for spaces
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
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
