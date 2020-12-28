module.exports = {
  purge: [
    "./pages/index.js",
    "node_modules/renderlesskit-react-tailwind/styles/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  components: {
    button: {
      variant: { primary: "bg-blue-500" },
    },
  },
};
