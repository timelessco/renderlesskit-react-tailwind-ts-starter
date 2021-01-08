const preset = require("@renderlesskit/react-tailwind/tailwind.config");

module.exports = {
  presets: [preset],
  purge: [
    "./pages/index.js",
    "node_modules/@renderlesskit/react-tailwind/src/theme.tsx",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  components: {
    extend: {
      button: {
        size: {
          xl: "h-16 min-w-16 text-xl px-8",
        },
        variant: {
          primary: "bg-blue-500",
          tertiary: "text-white bg-orange-500",
        },
      },
    },
  },
};
