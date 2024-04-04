import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: {
          light: '#16A34A', // Change to your desired light green color
          DEFAULT: '#16A34A', // Change to your desired default green color
          dark: '#16A34A', // Change to your desired dark green color
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config