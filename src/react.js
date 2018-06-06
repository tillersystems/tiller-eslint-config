/**
 * Copyright (c) 2018-present, Tiller Systems.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Inspired by https://github.com/airbnb/javascript
// && https://github.com/facebook/create-react-app/blob/next/packages/eslint-config-react-app/index.js

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    './common.js',
  ],

  parser: 'babel-eslint',

  env: {
    jest: true,
  },

  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: [0] }],
    'react/no-typos': 0,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
