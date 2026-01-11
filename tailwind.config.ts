import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0b0d0f',
        champagne: '#d9c3a1',
        gold: '#b89b5e'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(184, 155, 94, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
