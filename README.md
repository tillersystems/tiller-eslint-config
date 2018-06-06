# @tiller-ui/eslint-config

This package includes the shareable ESLint configuration used at [Tiller](https://www.tillersystems.com/).

**Table of Contents**

- [Usage](#usage)
  - [Base requirements](#base-requirements)
  - [Vanilla](#vanilla)
  - [React](#react)
- [Setup autofix in IDE](#setup-autofix-in-ide)
- [Ignoring files](#ignoring-files)

---
## Usage

### Base requirements

**terminal**
```sh
yarn install -D @tiller-ui/eslint-config eslint-config-airbnb-base babel-eslint eslint eslint-plugin-import
prettier eslint-plugin-prettier eslint-config-prettier
```
### Vanilla

**.eslintrc.js**
```js
{
  "extends": "@tiller-ui/eslint-config"
}
```

### React

**terminal**
```sh
yarn install -D @tiller-ui/eslint-config eslint-config-airbnb babel-eslint eslint eslint-plugin-import prettier eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier eslint-config-prettier
```

**.eslintrc.js**
```js
{
  "extends": "@tiller-ui/eslint-config/react"
}
```

That's it! You can override the settings by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

---

## Setup autofix in IDE

Use any [ESLint integration](http://eslint.org/docs/user-guide/integrations)
and activate "Fix on save" option.

---

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).
