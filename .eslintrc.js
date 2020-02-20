module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      jest: true,
    },
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  rules: {
    "react/prop-types": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "error",
  },
};