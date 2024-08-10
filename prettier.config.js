/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
  endOfLine: "auto",
  jsxSingleQuote: true,
  semi: false,
};

export default config;
