/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#FFF8B5',
        'cardcolor': '#DAA363'
      }
    }
  },
  plugins: [],
}

