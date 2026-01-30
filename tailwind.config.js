/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
          card: '#151515',
        },
        orange: {
          DEFAULT: '#fb923c',
          light: '#fdba74',
          dark: '#ea580c',
        },
        cyan: {
          DEFAULT: '#00D9FF',
          dark: '#00A3CC',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(251,146,60,0.1) 0%, rgba(10,10,10,0) 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 146, 60, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
