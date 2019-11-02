module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'max-len': [
      'error',
      {
        // http://eslint.org/docs/rules/max-len
        code: 120,
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.jsx', '**/*.stories.{js,jsx}'] }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/prefer-stateless-function': 0,
    'no-useless-constructor': 0,
    'no-nested-ternary': 0,
    'react/no-multi-comp': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
