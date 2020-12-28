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
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'prettier'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'function-paren-newline': 0,
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
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
};
