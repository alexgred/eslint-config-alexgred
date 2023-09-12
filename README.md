# Alex Dolzhenkov ESLint configuration

*Configuration for ESLint*

## Usage

Export two ESLint configurations for your usage.

### eslint-config-alexgred

Default export contains ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install by the command:

  ```sh
    npm install --save-dev eslint-config-alexgred eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "alexgred"` to your .eslintrc.* (.js, .cjs, .yaml, .yml, .json).

### eslint-config-alexgred/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install by the command:

  ```sh
  npm install --save-dev eslint-config-alexgred eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "alexgred/legacy"` to your .eslintrc.* (.js, .cjs, .yaml, .yml, .json).

## Contributors

  - [View Contributors](https://github.com/alexgred/eslint-config-alexgred/graphs/contributors)

## License

  - [The MIT License](https://github.com/alexgred/eslint-config-alexgred/blob/main/LICENSE.md)

## Author

ESLint config is developed by [@alexgred](https://github.com/alexgred).
