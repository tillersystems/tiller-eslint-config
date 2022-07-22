const a11yRules = require('./a11y');
const baseRules = require('./base');
const importsRules = require('./imports');
const jestRules = require('./jest');
const promisesRules = require('./promises');
const reactRules = require('./react');
const reactHooksRules = require('./reactHooks');
const typescriptRules = require('./typescript');

module.exports = {
  a11yRules,
  baseRules,
  importsRules,
  jestRules,
  promisesRules,
  reactRules,
  reactHooksRules,
  typescriptRules,
};
