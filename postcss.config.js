module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-merge-selectors":
      process.env.NODE_ENV === "production" ? {} : false,
    cssnano: process.env.NODE_ENV === "production" ? {} : false,
  },
};
