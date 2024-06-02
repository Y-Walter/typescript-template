const { resolve } = require("node:path");
const tslint = require("typescript-eslint");
const eslint = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const turbo = require("eslint-config-turbo");
const onlyWarn = require("eslint-plugin-only-warn");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */
/** @type  {import("eslint").Linter.FlatConfig[]} */
module.exports = [
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
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        browser: true,
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
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
];
