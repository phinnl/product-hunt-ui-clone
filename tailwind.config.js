/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-[#f5f8ff]",
    "bg-primary",
    "text-[#fff]",
    "rounded-[4px]",
    "px-4",
    "py-2",
    "font-semibold",
    "leading-6",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: '100%',
        lg: '988px',
        xl: '1216px',
      },
    },
    colors: {
      primary: "#f64900",
      grey: "#4b587c",
      overlay: "#000000b3",
      light: "#d9e1ec"
    },
    extend: {
      boxShadow: {
        input: "0 0 0 3px #fdd1be",
        dropdown: "0 0 8px 1px rgb(33 41 60 / 10%)",
        header: "0 0 1px 1px rgb(33 41 63 / 10%)",
        btn: "0 0 0 2px #fff, 0 0 0 4px #f64900",
        overlay: "1px 0 6px 0 rgb(0 0 0 / 30%)"
      },
    },
  },
  plugins: [],
};
