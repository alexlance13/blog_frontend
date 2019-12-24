module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 0,
    'no-var-requires': 0,
    camelcase: 2,
    'arrow-parens': 0,
  },
};
