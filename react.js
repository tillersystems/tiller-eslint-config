const rules = require('./eslint');

module.exports = {
  overrides: [
    {
      // maybe separate them
      files: ['*.tsx'],
      env: {
        browser: true,
        es2021: true,
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
        react: {
          version: 'detect',
        },
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
      ],
      rules: {
        ...rules.a11yRules,
        ...rules.baseRules,
        ...rules.importsRules,
        ...rules.promisesRules,
        ...rules.typescriptRules,
        ...rules.reactRules,
        ...rules.reactHooksRules,
      },
      plugins: [
        '@typescript-eslint',
        'import',
        'promise',
        'eslint-comments',
        'jsx-a11y',
        'react',
        'react-hooks',
        'testing-library',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        project: 'tsconfig.json',
        sourceType: 'module',
        // tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
        ecmaFeatures: {
          jsx: true,
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
