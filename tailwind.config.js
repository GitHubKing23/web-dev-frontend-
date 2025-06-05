/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/posts/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: '#1F3A93',    // Navy
        accent: '#D4AF37',     // Gold
        text: '#2C3E50',       // Charcoal
        background: '#F8F9FA', // Light gray-white
        light: '#F0F2F5',      // Section alternate
        muted: '#E5E7EB',      // Gray border tone
      },
      spacing: {
        'header': '4.5rem',
        'section': '5rem',
        'card': '1.75rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 8px 20px rgba(0, 0, 0, 0.04)',
        lifted: '0 12px 28px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out both',
        'slide-down': 'slideDown 0.6s ease-out both',
      },
    },
  },
  plugins: [typography],
};
