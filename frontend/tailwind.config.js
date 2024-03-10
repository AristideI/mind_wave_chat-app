/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pup: {
          50: "#EBEFFF",
          100: "#AFB3FF",
          200: "#656ED3",
        },
        bla: {
          100: "#323232",
          200: "#181818",
          300: "#121212",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
