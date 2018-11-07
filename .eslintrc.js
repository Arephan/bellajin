module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/prop-types": 0
  },
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "16.4"
    }
  }
};
