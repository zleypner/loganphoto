/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'royal-blue': {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0056e6',
          600: '#0044b3',
          700: '#003380',
          800: '#00224d',
          900: '#00111a',
        },
        'purple': {
          50: '#f5e6ff',
          100: '#e0b3ff',
          200: '#cc80ff',
          300: '#b84dff',
          400: '#a31aff',
          500: '#8a00e6',
          600: '#6b00b3',
          700: '#4d0080',
          800: '#2e004d',
          900: '#0f001a',
        },
      },
    },
  },
  plugins: [],
}
