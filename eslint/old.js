module.exports = {
  'function-paren-newline': 0,
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'import/no-unresolved': 2,
  'import/no-webpack-loader-syntax': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: true, optionalDependencies: false, peerDependencies: false },
  ],
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  'react/forbid-prop-types': [0, { forbid: [0] }],
  'react/no-typos': 0,
  'no-return-await': 'off',
  'array-callback-return': 'off',
  'arrow-parens': 'off',
  'no-continue': 'off',
  'class-methods-use-this': 'off',
  'consistent-return': 'off',
  'implicit-arrow-linebreak': 'off',
  'no-await-in-loop': 'warn',
  'no-param-reassign': 'warn',
  'no-restricted-syntax': 'off',
  'no-return-assign': 'off',
  'object-curly-newline': 'off',
  'operator-linebreak': 'off',
  'max-classes-per-file': 'off',
  'no-use-before-define': 'off',
  'prettier/prettier': 'error',
  'import/no-cycle': 'warn',
  'react/static-property-placement': 'off',
  // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'off',
  // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
  'import/prefer-default-export': 'off',
  'import/namespace': ['error', { allowComputed: true }],
  'import/newline-after-import': 'error',
  'import/order': [
    'error',
    {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
      },
    },
  ],

  // Team discussion about the two following rules:
  // https://github.com/orgs/tillersystems/teams/engineering/discussions/7
  // explicit-function-return-type turned off to let us the ability to use inference or not
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-inferrable-types': ['error'],
  '@typescript-eslint/dot-notation': [
    'warn',
    {
      allowKeywords: true,
      allowPattern: '',
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/no-shadow': 'off',
  '@typescript-eslint/no-throw-literal': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: false, variables: true, typedefs: true },
  ],
  '@typescript-eslint/return-await': 'off',
  'jest/no-standalone-expect': 'off',
};
