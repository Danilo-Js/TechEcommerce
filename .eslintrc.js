module.exports = {
  root: true,
  extends: '@react-native',
  // i want to disable this "/* eslint-disable react-native/no-inline-styles */"
  rules: {
    'react-native/no-inline-styles': 'off',
  },
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
