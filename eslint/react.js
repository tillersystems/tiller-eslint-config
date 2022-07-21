module.exports = {
  'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
  'react/jsx-no-duplicate-props': 'warn',
  'react/jsx-no-target-blank': 'warn',
  'react/jsx-no-undef': 'warn',
  'react/jsx-pascal-case': ['warn', { allowAllCaps: true, ignore: [] }],
  // Enable spreading props into a component, like `<Component {...props} />`
  'react/jsx-uses-react': 'warn',
  'react/jsx-uses-vars': 'warn',
  'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],

  'react/jsx-no-bind': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/no-array-index-key': 'off',
  'react/no-unescaped-entities': 'off',
  // This rule reports too much false positives in SFCs/HOCs/with destructuring
  // See for instance :
  // - https://github.com/yannickcr/eslint-plugin-react/issues/816
  // - https://github.com/yannickcr/eslint-plugin-react/issues/885
  'react/no-unused-prop-types': 'off',
  // Disable this for now
  'react/prefer-stateless-function': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'warn',
  'react/require-default-props': 'off',
  // This rule is too restrictive and not really adapted to our needs
  'react/sort-comp': 'off',
  // Let state be initialized outside of a class constructor
  'react/state-in-constructor': 'off',
  // Enable definition of static class properties
  'react/static-property-placement': 'off',
  // enable this rule again when false positives will have disappeared
  'react/destructuring-assignment': 'off',
  'react/display-name': 'off',
};
