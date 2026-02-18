/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#1F5CFF',
          50: '#eff4ff',
          100: '#dbe6ff',
          200: '#4d7aff',
          300: '#1F5CFF',
          400: '#1a4edb',
          500: '#1F5CFF',
          600: '#1a4edb',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#111827',
        },
        'sky-blue': '#0ea5e9',
        'deep-blue': '#1e40af',
        'navy': '#1e3a8a',
        'cyan': '#06b6d4',
        'foreground': '#111827',
      },
    },
  },
  plugins: [],
}
