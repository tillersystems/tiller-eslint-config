# @tillersystems/eslint-config

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
yarn install -D @tillersystems/eslint-config eslint-config-airbnb-base babel-eslint eslint eslint-plugin-import prettier eslint-plugin-prettier eslint-config-prettier
```

### Vanilla

**.eslintrc**

```js
{
  "extends": "@tillersystems/eslint-config"
}
```

### React

**terminal**

```sh
yarn install -D @tillersystems/eslint-config eslint-config-airbnb babel-eslint eslint eslint-plugin-import prettier eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier eslint-config-prettier
```

**.eslintrc**

```js
{
  "extends": "@tillersystems/eslint-config/react"
}
```

### Typescript

**terminal**

```sh
yarn add eslint-config-prettier eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-plugin-promise eslint-config-airbnb-typescript eslint babel-eslint prettier eslint-plugin-react eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-import-resolver-typescript --dev
```

**.eslintrc**

```js
{
  "extends": "@tillersystems/eslint-config/typescript"
}
```

**vscode**
Inside your Workspace settings in VS Code, you will need to add something like

```json
  "eslint.workingDirectories": [
    { "directory": "tiller-microservices-javascript", "changeProcessCWD": true }
  ],
  "eslint.packageManager": "yarn",
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true
```

to make it work, depending on how your workspace is setup, this works if your workspace look like:

```
RootFolder
 - tiller-microservices-javascript
 - other gits repository
```

That's it! You can override the settings by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

---

## Setup autofix in IDE

Use any [ESLint integration](http://eslint.org/docs/user-guide/integrations)
and activate "Fix on save" option.

---

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).
