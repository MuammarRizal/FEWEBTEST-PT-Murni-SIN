/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A85C01",
        secondary: "#252525",
        "gray-soft": "#8a8a8a",
        "white-soft": "#f2f2f2",
      },
      spacing: {
        msn: "40px",
      },
      fontSize: {
        "msn-12": "0.795rem", // convert 12px
        "msn-14": "0.875rem", // convert 14px
        "msn-16": "1rem", // convert 16px
        "msn-18": "1.125rem", // convert 18px
        "msn-22": "1.375rem", // convert 22px
        "msn-36": "2.25rem", // convert 36px
        "msn-38": "2.375rem", // convert 38px
        "msn-48": "3rem", // convert 48px
      },
    },
  },
  plugins: [],
};
