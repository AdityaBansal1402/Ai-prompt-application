/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customTrack: '#4a5568', // Customize this color
        customThumb: '#2d3748', // Customize this color
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

