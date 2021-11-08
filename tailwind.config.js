module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors: {
      "primary-orange": "#F9663A",
      "primary-orange-lightest1": "#FF7900",
      "secondary-blue": "#182E7C",
      "grey-darker" : "#4F4F4F",
      "grey-light" : "#C2C9D1",
      "black-default": "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
