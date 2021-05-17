module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-prettier',
    'simple-import-sort',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // 'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/extensions': [ 2, 'never', { pattern: { '.ts': 'never', '.tsx': 'never' },},],

    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // 'import/prefer-default-export': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // 'implicit-arrow-linebreak': ['error', 'below'],

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // space-before-function-paren: off,
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    // 'comma-dangle': 'off',
    'arrow-parens': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
