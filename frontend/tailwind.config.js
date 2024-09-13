/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js.jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: 'rgb(16,23,42)', // Define your custom color here
        secondary_color: '#bc04fc',
        mode_color: '#ffff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

