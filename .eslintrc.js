module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-server-import-in-page': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-empty-pattern': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@next/next/no-img-element': 0,
    'jsx-a11y/alt-text': 0
  }
}
