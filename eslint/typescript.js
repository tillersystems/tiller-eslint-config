module.exports = {
  /**
   * Disable base ESLint rules that are either "extended" by @typescript-eslint
   * (and used through their recommended config, which we extend) or already
   * checked by TS itself.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
   */
  'no-array-constructor': 'off',
  'no-empty-function': 'off',
  'no-extra-semi': 'off',
  'no-implied-eval': 'off',
  'no-loss-of-precision': 'off',
  'no-return-await': 'off',
  'no-shadow': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'require-await': 'off',
  'padding-line-between-statements': 'off',

  '@typescript-eslint/consistent-type-assertions': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': ['warn'],
  '@typescript-eslint/no-array-constructor': 'warn',
  '@typescript-eslint/no-shadow': 'warn',
  '@typescript-eslint/no-throw-literal': 'warn',
  '@typescript-eslint/no-useless-constructor': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/return-await': 'warn',
  '@typescript-eslint/sort-type-union-intersection-members': 'warn',
  '@typescript-eslint/no-unused-expressions': [
    'warn',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'warn',
    {
      classes: false,
      functions: false,
      typedefs: false,
      variables: false,
    },
  ],
  '@typescript-eslint/padding-line-between-statements': [
    'warn',
    {
      blankLine: 'always',
      prev: '*',
      next: ['return'],
    },
  ],

  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/unbound-method': 'off',
};
