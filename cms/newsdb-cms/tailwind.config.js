import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimsonRed: '#7D0000',
        darkGold: '#B8860B',
        black: '#0A0A0A',
        gunmetalGrey: '#2C3539',
        boneWhite: '#E3DAC9',
        deepPurple: '#4B0082',
        brightRed: '#FF0000',
        brightGold: '#FFD700',
      },
      fontFamily: {
        Playfair: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [daisyui],
}

