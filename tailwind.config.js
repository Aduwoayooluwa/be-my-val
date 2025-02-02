/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFB6C1',
        'blush-pink': '#FF69B4',
        'rose-gold': '#E0BFB8',
        'creamy-white': '#FFF5EE',
        'dusty-rose': '#D8A7A7',
        'light-coral': '#F88379',
        'deep-red': '#D2042D',
        'gold': '#FFD700',
        'lavender': '#E6E6FA',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale': 'scale 0.3s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scale: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};