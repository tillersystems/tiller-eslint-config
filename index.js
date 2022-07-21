const rules = require('./eslint');

module.exports = {
  overrides: [
    {
      files: ['*.js'],
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'airbnb-base',
        'prettier',
      ],
      plugins: ['import', 'promise', 'eslint-comments'],
      rules: {
        ...rules.baseRules,
        ...rules.importsRules,
        ...rules.promisesRules,
      },
    },
  ],
};
