/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f8f6f4",
        secondary: "#1ea84f",
        clrtitle: "#404742",
        clrtext: "#696868",
        clricon: "#5e5e5e",
        crdtitle: "#292836",
        lgrey: "#f0f0f0",
        vdark: "#212121",
        footertxt: "#b5b5b5",
        bgfooter: "#1b1c1b",
        darkmode: "#151515",
      },
        fontFamily: {
          outfitbold: ["OutfitBold", "sans-serif"],
          outfitregular: ["OutfitRegular", "sans-serif"],
          outfitsemibold: ["OutfitSemiBold", "sans-serif"],
        },
        
  },
  plugins: [],
}
}
