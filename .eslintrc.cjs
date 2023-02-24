/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting', 'prettier', 'plugin:prettier/recommended', './.eslintrc-auto-import.json'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      'vars': 'all',
      'varsIgnorePattern': '^_',
      'args': 'after-used',
      'argsIgnorePattern': '^_'
    }],
    'vue/multi-word-component-names': 'off'
  }
}
