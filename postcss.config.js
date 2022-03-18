// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss"),
//     require("postcss-nested"),
//     require("autoprefixer"),
//   ],
// };

// postcss.config.js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
