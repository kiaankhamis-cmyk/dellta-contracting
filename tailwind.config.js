/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        delta: {
          navy: '#0D2C54',
          dark: '#081B33',
          orange: '#E65A28',
          orangeHover: '#CF4A1B',
          petrol: '#2B6777',
          petrolLight: '#E8F1F5',
          bgLight: '#F8FAFC',
          textMain: '#0F172A',
          textMuted: '#475569',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}