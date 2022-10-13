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
        'dark-red': "#C17171",
        'light-red': "#D32B2B",
        'light-red-2': "#D39383",
        'dark-gray': "#BBC5AA",
        'gray': "#F2F2F2",
        'dark-gray-2': "#565958",
        'light-gray': "#ACBBB6",
        'light-blue': '#4ABFD9',
        'dark-blue': "#374957",
        'light-pink': "#FFECE1",
        'green': "#71BC44"
      },
    },
  },
  plugins: [],
}
