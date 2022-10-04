/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h1": ["80px", { lineHeight: "50px", letterSpacing: "-0.03em" }]
      },
      colors: {
        'primary': "#E6EED6",
        'secondary': "#DDE2C6",
        'dark': "#090C02",
        'red': "#A72608",
        'dark-gray': "#BBC5AA",
        'gray': "#F2F2F2",
        'dark-gray-2': "#565958",
        'light-blue': '#4ABFD9'
      },
    },
  },
  plugins: [],
}
