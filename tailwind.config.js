/** @type {import('tailwindcss').Config} */
const { siteConfig } = require('./config/siteConfig.js');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f3460',
        secondary: '#1a1a2e',
        accent: '#e94560',
      },
      fontFamily: {
        heading: [siteConfig.headingFont, 'serif'],
        body: [siteConfig.bodyFont, 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
