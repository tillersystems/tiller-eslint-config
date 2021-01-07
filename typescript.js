/**
 * Copyright (c) 2020-present, Tiller Systems.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Inspired by https://www.npmjs.com/package/eslint-config-airbnb-typescript
// && https://github.com/iamturns/create-exposed-app/blob/master/package.json

module.exports = {
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'import', 'promise', 'prettier'],
  extends: [
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
  ],
  ignorePatterns: ['**/*.js', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: `./tsconfig.json`,
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'latest',
    },
  },
  rules: {
    'array-callback-return': 'off',
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 'off',
    'no-await-in-loop': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'object-curly-newline': 'off',
    'prettier/prettier': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    'jest/no-standalone-expect': 'off',
    '@typescript-eslint/dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPattern: '',
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ],
    '@typescript-eslint/indent': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
};
