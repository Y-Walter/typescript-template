const onlyWarn = require("eslint-plugin-only-warn");
const turbo = require("eslint-config-turbo");
const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const tslint = require("typescript-eslint");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = tslint.config(
  {
    files: ["*.ts", "*.tsx"],
  },
  {
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "eslint.config.js",
      "node_modules/",
      "dist/",
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        NodeJS: true,
        React: true,
        JSX: true,
        jest: true,
      },
    },
  },
  ...tslint.configs.recommended,
  {
    plugins: {
      "eslint-config-turbo": turbo,
      prettier,
      "only-warn": onlyWarn,
    },
  }
);
