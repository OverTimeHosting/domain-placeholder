/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
        border: "rgb(38, 38, 38)",
        input: "rgb(38, 38, 38)",
        ring: "rgb(212, 212, 212)",
        background: "rgb(0, 0, 0)",
        foreground: "rgb(250, 250, 250)",
        primary: {
          DEFAULT: "rgb(250, 250, 250)",
          foreground: "rgb(9, 9, 11)",
        },
        secondary: {
          DEFAULT: "rgb(39, 39, 42)",
          foreground: "rgb(250, 250, 250)",
        },
        destructive: {
          DEFAULT: "rgb(220, 38, 38)",
          foreground: "rgb(250, 250, 250)",
        },
        muted: {
          DEFAULT: "rgb(39, 39, 42)",
          foreground: "rgb(161, 161, 170)",
        },
        accent: {
          DEFAULT: "rgb(39, 39, 42)",
          foreground: "rgb(250, 250, 250)",
        },
        popover: {
          DEFAULT: "rgb(0, 0, 0)",
          foreground: "rgb(250, 250, 250)",
        },
        card: {
          DEFAULT: "rgb(9, 9, 11)",
          foreground: "rgb(250, 250, 250)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
