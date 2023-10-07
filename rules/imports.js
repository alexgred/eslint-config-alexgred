module.exports = {
  rules: {
    /**
     * Disallow non-import statements appearing before import statements.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     *
     * 🔧 Fixable
     * 💡 Manually fixable
     * 🚫 Not fixable
     */

    /**
     * Forbid empty named import blocks.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
     *
     * 🔧 Fixable
     * 💡 Manually fixable
     */
    'no-deprecated': 'error',

    /**
     * Forbid the use of mutable exports with var or let.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     *
     * 🚫 Not fixable
     */
    'no-mutable-exports': 'error',

    /**
     * Forbid modules without exports, or exports without matching import in another module.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
     *
     * 🚫 Not fixable
     */
    'no-unused-modules': ['error', { unusedExports: true }],
  },
};
