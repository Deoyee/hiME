import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 // tailwind.config.js

theme: {
  extend: {
    keyframes: {
      border: {
        to: { '--border-angle': '360deg' },
      },
    },
    animation: {
      border: 'border 4s linear infinite',
    },
  },
},
plugins: [
  daisyui
],
}

