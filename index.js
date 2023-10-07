module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    './ rules / errors',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    'browser': true,
    'node': true,
  },
  rules: {},
};
