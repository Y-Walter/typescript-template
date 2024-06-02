const { resolve } = require("node:path");
const tslint = require("typescript-eslint");
const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const turbo = require("eslint-config-turbo");
const onlyWarn = require("eslint-plugin-only-warn");

const project = resolve(process.cwd(), "tsconfig.json");

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
        React: true,
        JSX: true,
        browser: true,
      },
    },
  },
  {
    extends: [require.resolve("@vercel/style-guide/eslint/next")],
  },
  ...tslint.configs.recommended,
  {
    plugins: {
      "eslint-config-turbo": turbo,
      prettier,
      "only-warn": onlyWarn,
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  }
);
