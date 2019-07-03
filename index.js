module.exports = {
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
  },
  rules: {
    'react/prop-types': 'off',
  },
};
