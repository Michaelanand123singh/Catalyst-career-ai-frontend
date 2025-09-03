/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
         blink: {
          '0%, 80%': { opacity: '1', transform: 'scale()' },
          '80%': { opacity: '1', transform: 'scale(1.05)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(251, 191, 36, 0.8), 0 0 10px rgba(251, 191, 36, 0.6)' },
          '50%': { boxShadow: '0 0 20px rgba(251, 191, 36, 1), 0 0 30px rgba(251, 191, 36, 0.8)' },
        },
      },
      animation: {
        blink: 'blink 4.5s infinite ease-in-out',
        glow: 'glow 8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

