module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-focus-visible": {},
    cssnano: process.env.NODE_ENV === "production" ? {} : false,
  },
};
