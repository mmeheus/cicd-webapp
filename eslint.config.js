import { eslintRecommended } from "@eslint/js"; // Import ESLint's recommended config

export default [
  eslintRecommended,  // Apply ESLint recommended rules
  {
    files: ["**/*.js"],  // Targets all JS files
    languageOptions: {
      ecmaVersion: 2021,  // Use ECMAScript 2021
      sourceType: "module",  // Enable ES module syntax
      globals: {
        es6: true,  // Enable ES6 environment
        node: true,  // Enable Node.js environment
        mocha: true,  // Enable Mocha for testing
      },
    },
    rules: {
      // Migrate your custom rules
      indent: ["error", 2, { SwitchCase: 1 }],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-tabs": ["error"],
      "max-len": ["error", { code: 120, tabWidth: 2 }],
      "arrow-parens": ["error", "always"],
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "no-inner-declarations": "off",
    },
  },
];
