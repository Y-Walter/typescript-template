const onlyWarn = require("eslint-plugin-only-warn");
const turbo = require("eslint-config-turbo");
const js = require("@eslint/js");
const tslint = require("typescript-eslint");
const prettier = require("eslint-config-prettier");

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
module.exports = tslint.config(
  {
    files: ["*.ts"],
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
  ...tslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        NodeJS: true,
        jest: true,
      },
    },
  },
  {
    plugins: {
      "eslint-config-turbo": turbo,
      prettier,
      "only-warn": onlyWarn,
    },
  }
);
