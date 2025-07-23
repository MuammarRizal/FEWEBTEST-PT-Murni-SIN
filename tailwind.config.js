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
        40: "2.5rem", // convert 40px
        140: "8.795rem", // convert 140px
      },
      fontSize: {
        "msn-8": "0.5rem", // convert 8px
        "msn-10": "0.625rem", // convert 10px
        "msn-12": "0.795rem", // convert 12px
        "msn-14": "0.875rem", // convert 14px
        "msn-16": "1rem", // convert 16px
        "msn-18": "1.125rem", // convert 18px
        "msn-22": "1.375rem", // convert 22px
        "msn-28": "1.75rem", // convert 28px
        "msn-34": "2.125rem", // convert 34px
        "msn-36": "2.25rem", // convert 36px
        "msn-38": "2.375rem", // convert 38px
        "msn-40": "2.5rem", // convert 40px
        "msn-48": "3rem", // convert 48px
      },
    },
  },
  plugins: [],
};
