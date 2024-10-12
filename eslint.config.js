export default [
  {
    files: ["**/*.js"],  // Applies the config to all JS files
    languageOptions: {
      ecmaVersion: 2021, // Same as setting "es2021": true
      sourceType: "module", // Same as "sourceType": "module"
      globals: {
        es6: true,   // Indicates support for ES6 global variables
        node: true,  // Node.js environment
        mocha: true, // Mocha environment for testing
      },
    },
    linterOptions: {
      // Extends eslint recommended rules
      extends: ["eslint:recommended"],
    },
    rules: {
      // Copying rules directly from your .eslintrc.json
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
