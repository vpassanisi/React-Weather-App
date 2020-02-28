const colors = require("./material_pallette.js");

module.exports = {
  theme: {
    extend: {},
    colors: colors,
    alphaColors: [
      "red.900",
      "pink.900",
      "purple.900",
      "deep-purple.900",
      "indigo.900",
      "blue.900",
      "light-blue.900",
      "cyan.900",
      "teal.900",
      "green.900",
      "light-green.900",
      "lime.900",
      "yellow.900",
      "amber.900",
      "orange.900",
      "deep-orange.900",
      "brown.900",
      "gray.900",
      "blue-gray.900"
    ]
  },
  variants: {
    backgroundColor: ["active"]
  },
  plugins: [require("tailwindcss-bg-alpha")()]
};
