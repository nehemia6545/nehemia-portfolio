/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: { bg: '#030712', card: 'rgba(17, 24, 39, 0.6)', border: 'rgba(55, 65, 81, 0.5)' },
        neon: { cyan: '#00f0ff', purple: '#b026ff', blue: '#3b82f6' }
      }
    }
  },
  plugins: [],
}