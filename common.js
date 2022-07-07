/**
 * Copyright (c) 2018-present, Tiller Systems.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Inspired by https://github.com/airbnb/javascript
// && https://github.com/facebook/create-react-app/blob/next/packages/eslint-config-react-app/index.js

module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],

  parser: '@babel/eslint-parser',

  env: {
    browser: false,
    node: true,
    commonjs: true,
    es6: true,
    amd: false,
  },

  plugins: ['import', 'prettier'],

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
  },

  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
