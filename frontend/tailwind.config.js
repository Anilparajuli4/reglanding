/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js.jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, #181718 0%, #2F2144 50%, #5C439F 100%)',
      },
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

