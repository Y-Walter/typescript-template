const reactInternal = require("@repo/eslint-config/react-internal");
const tslint = require("typescript-eslint");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = tslint.config(
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.lint.json",
      tsconfigRootDir: __dirname,
    },
  },
  ...reactInternal
);
