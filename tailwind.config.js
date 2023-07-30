/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        default: "73.125rem",
      },
      screens: {
        mobile: "500px",
      },
      borderColor: {
        "border-gray": "#DCDCDC",
      },
      colors: {
        "light-gray": "#F6F6DE",
        primary: "#075744",
        "primary-hover": "#0c7850",
        white: "#F0F0D8",
        secondary: "#89C030",
        gray: "#828282",
        terc: "#123535",
      },
      backgroundColor: {
        primary: "#0C6746",
        "primary-hover": "#0c7850",
        secondary: "#89C030",
        "section-1": "#E0FED6",
        terc: "#123535",
        green: '#48C01E',
        'green-strong': '#609707'
      },
    },
  },
  plugins: [],
};
