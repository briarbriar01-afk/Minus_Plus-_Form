import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tahoma', 'Arial', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 25px 75px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        // KDP emblem palette — gold field, red sun, black eagle
        gold: {
          50:  '#fdf9ec',
          100: '#faf0cb',
          200: '#f4de8f',
          300: '#eec654',
          400: '#e7b02c',
          500: '#d99a1b',
          600: '#b87b14',
          700: '#935e14',
          800: '#794c17',
          900: '#653f18',
        },
      },
    },
  },
  plugins: [],
};

export default config;
