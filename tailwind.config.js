/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#C6E7FF",
        lightblue: "#9FD0F8",
        pink: "#FFE3E3",
        green: "#C9E9D2",
        ivory: "#FEF9F2",
        beige: "#DABA8B",
        darkblue: "#000080",
        ogblue: "#0000FF"
      },
    },
  },
  plugins: [],
};
