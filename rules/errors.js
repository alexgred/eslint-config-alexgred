module.exports = {
  rules: {
    'array-callback-return': ['error', { allowImplicit: true }],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'off',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'warn',
    'no-new-native-nonconstructor': 'off',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unreachable-loop': ['error', {
      ignore: [],
    }],
    'no-unused-private-class-members': 'off',
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'require-atomic-updates': 'off',
  }
};
