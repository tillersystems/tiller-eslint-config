const rules = require('./eslint');

module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['@typescript-eslint', 'import', 'promise', 'eslint-comments'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        project: 'tsconfig.json',
        sourceType: 'module',
        // tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        ...rules.baseRules,
        ...rules.importsRules,
        ...rules.promisesRules,
        ...rules.typescriptRules,
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
      },
      overrides: [
        {
          files: ['**/tests/**'],
          env: {
            jest: true,
          },
          extends: ['plugin:jest/recommended'],
          plugins: ['jest'],
          settings: {
            jest: {
              version: 26,
            },
          },
          rules: rules.jestRules,
        },
      ],
    },
  ],
};
