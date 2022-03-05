const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        text: {
          light: {
            light: colors.gray[500],
            DEFAULT: colors.gray[700],
            dark: colors.gray[900],
          },
          dark: {
            light: colors.gray[100],
            DEFAULT: colors.gray[300],
            dark: colors.gray[500],
          },
        },
        bg: {
          light: {
            light: colors.gray[50],
            DEFAULT: colors.gray[100],
            dark: colors.gray[200],
          },
          dark: {
            light: colors.gray[600],
            DEFAULT: colors.gray[700],
            dark: colors.gray[800],
          },
        },
        border: {
          light: {
            light: colors.gray[500],
            DEFAULT: colors.gray[700],
            dark: colors.gray[900],
          },
          dark: {
            light: colors.gray[100],
            DEFAULT: colors.gray[300],
            dark: colors.gray[500],
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
