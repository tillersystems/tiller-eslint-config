module.exports = {
  'import/no-deprecated': 'warn',
  'import/extensions': ['warn', 'ignorePackages', { js: 'never', ts: 'never' }],
  'import/no-unresolved': 'warn',
  'import/no-webpack-loader-syntax': 'warn',
  'import/no-extraneous-dependencies': [
    'warn',
    { devDependencies: true, optionalDependencies: false, peerDependencies: false },
  ],
  'import/namespace': ['warn', { allowComputed: true }],
  'import/newline-after-import': 'warn',
  'import/no-useless-path-segments': 'warn',
  'import/order': [
    'warn',
    {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
      },
      groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
      'newlines-between': 'always',
      pathGroupsExcludedImportTypes: ['internal'],
      pathGroups: [
        {
          group: 'internal',
          pattern: '@tillersystems/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@tiller/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '#{*,*/**}',
          position: 'after',
        },
      ],
    },
  ],

  'import/no-cycle': 'off',
  'import/default': 'off',
  'import/named': 'off',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/prefer-default-export': 'off',
};
