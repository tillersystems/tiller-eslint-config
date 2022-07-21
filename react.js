const rules = require('./eslint');

module.exports = {
  overrides: [
    {
      // maybe separate them
      files: ['*.jsx', '*.tsx'],
      env: {
        browser: true,
        es2021: true,
      },
      settings: {
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
    },
  ],
};
