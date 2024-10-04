/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#FFF8B5',
        'cardcolor': '#E0BE8B',
        'deep':'#2C1810'
      }
    }
  },
  plugins: [],
}

