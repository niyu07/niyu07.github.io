/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #85EBFF 0%, #43C2DB 6%, #0099B7 13%, #008099 50%, #00BBE0 75%, #D6F8FF 100%)",
      },
    },
  },
  plugins: [],
};
