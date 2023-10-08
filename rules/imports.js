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

    /**
     * Forbid import of modules using absolute paths.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     *
     * 🔧 Fixable
     */
    'no-absolute-path': 'error',

    /**
     * Forbid a module from importing a module with a dependency path back to itself.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     *
     * 🚫 Not fixable
     */
    'import/no-cycle': 'error',

    /**
     * Forbid importing packages through relative paths.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     *
     * 🔧 Fixable
     */
    'import/no-relative-packages': 'warn',

    /**
     * Forbid a module from importing itself.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     *
     * 🚫 Not fixable
     */
    'import/no-self-import': 'error',

    /**
     * Forbid unnecessary path segments in import and require statements.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     *
     * 🔧 Fixable
     */
    'import/no-useless-path-segments': 'error',

    /**
     * Ensure all imports appear before other statements.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     *
     * 🔧 Fixable
     */
    'import/first': 'error',

    /**
     * Enforce a newline after import statements.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     *
     * 🔧 Fixable
     */
    'import/newline-after-import': 'warn',

    /**
     * Forbid unassigned imports
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
     *
     * 🚫 Not fixable
     */
    'import/no-unassigned-import': 'warn',

    /**
     * Enforce a convention in module import order.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     *
     * 🔧 Fixable
     */
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // Packages
          'internal', // Aliased modules
          'parent', // Relative parent
          'sibling', // Relative sibling
          'index', // Relative index
        ],
        'newlines-between': 'ignore',
      },
    ],
  },
};
