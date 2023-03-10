/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      josefin: '"Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    },
    fontSize:{
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "xl": ["2.6rem", "1.6"],
      "5xl": ["8rem", "1"]
    },
    colors: {
      "transparent": "transparent",
      background: "#000212",
      white: "#fff",
      "white-a08": "rgba(255, 255, 255, 0.08)",
      "grey": "#858699",
      "grey-dark": "#222326"
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2.0rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4.0rem",
      11: "4.4rem",
      12: "4.8rem",
      "navigation-height":"var(--navigation-height)"
    },
    backgroundImage: {
      "primary-gradient": "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)"
    },
    boxShadow: {
      "primary": "rgb(80 63 205 / 50%) 0px 1px 40px"
    }
    },
  },
  plugins: [],
}
