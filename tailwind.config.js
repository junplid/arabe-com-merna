/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        "default": "73.125rem"
      },
      screens: {
        mobile: "500px"
      },
      colors: {
        "light-gray": "#F6F6DE",
        primary: "#075744",
        white: "#F0F0D8",
        "secondary": "#89C030"
      },
      backgroundColor: {
        "primary": "#0C6746",
        "primary-hover": "#0c7850",
        "secondary": "#89C030",
        "section-1": "#E0FED6"
      }
    },
  },
  plugins: [],
}
