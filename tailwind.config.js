/** @type {import('tailwindcss').Config} */

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
        background: '#0A0F1F',
        surface: '#1A1F2E',
        border: '#2D3748',
        primary: '#60A5FA',
        secondary: '#A78BFA',
        accent: '#60A5FA',
        'text-primary': '#E2E8F0',
        'text-muted': '#94A3B8',
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
        star: '#FACC15',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
