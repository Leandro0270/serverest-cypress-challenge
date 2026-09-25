const cypressGlobals = {
  Cypress: "readonly",
  cy: "readonly",
  expect: "readonly",
};

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "cypress/screenshots/**",
      "cypress/videos/**",
      "cypress/downloads/**",
    ],
  },
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: cypressGlobals,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["cypress.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
