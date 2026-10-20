const { preset } = require("@renderlesskit/react-tailwind/preset.js");

module.exports = preset({
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@renderlesskit/react-tailwind/dist/esm/**/*",
    "./renderlesskit.config.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
});
