module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'array-callback-return': 0,
    'no-unused-vars': 0,
    'no-mixed-operators': 0,
    'no-empty-pattern': 0,
    'max-len': 0,
    'react/forbid-prop-types': 0,
  },
};
