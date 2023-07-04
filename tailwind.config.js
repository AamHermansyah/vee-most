/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["League Spartan"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        primary: "repeat(auto-fit, minmax(150px, 300px))",
        "primary-mobile": "repeat(auto-fit, minmax(150px, 300px))",
        secondary: "repeat(auto-fit, minmax(150px, 200px))",
        "secondary-mobile": "repeat(auto-fit, minmax(100px, 150px))",
      },
    },
  },
  plugins: [],
};
