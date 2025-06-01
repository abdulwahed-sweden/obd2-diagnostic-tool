/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'xs': '0.8625rem',
        'sm': '1.00625rem', 
        'base': '1.15rem',
        'lg': '1.29375rem',
        'xl': '1.4375rem',
        '2xl': '1.725rem'
      },
      colors: {
        diagnostic: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          600: '#0284c7',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}