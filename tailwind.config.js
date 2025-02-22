/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
      './components/**/*/.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FEEE91",
        secondary: "#FFBD73",
        accent : "#FF9D3D",
        bgnd : "#F5F3F8",
        
      }
    },
  },
  plugins: [],
}