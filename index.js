module.exports = {
  extends: [
    'eslint:recommended',
    './rules/errors',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
