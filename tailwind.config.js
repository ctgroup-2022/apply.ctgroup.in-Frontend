/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Enable JIT mode for faster builds
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#224e91",
        secondary: "#b91c1c",
        text_color: "#fffde7",
        dark_text: "#1d3e6f",
        dark_yellow_text: "#432205",
        dark_red_text: "#450a0a",
        button_color: "#fcc804",
        light_button_color: "#ffe943",
      },
    },
  },
  plugins: [],
};
