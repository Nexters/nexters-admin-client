module.exports = {
  plugins: ['import', 'eslint-plugin-simple-import-sort', 'unused-imports'],
  extends: ['next', 'turbo', 'prettier', 'plugin:import/recommended'],
  rules: {
    'react/jsx-key': 'off',
    'react/no-unescaped-entities': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-first-prop-new-line': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'eol-last': 'error',
    'semi': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'unused-imports/no-unused-imports-ts': ['error'],
    'comma-spacing': ['error', { before: false, after: true }],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/newline-after-import': ['error', { count: 1, considerComments: true }],
  },
};
