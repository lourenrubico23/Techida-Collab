/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7f5f2",
        secondary: "#1ea84f",
        clrtitle: "#404742",
        clrtext: "#696868",
        clricon: "#5e5e5e",
        crdtitle: "#292836",
        lgrey: "#f0f0f0",
        vdark: "#212121",
        footertxt: "#b5b5b5",
      },
    },
  },
  plugins: [],
}

