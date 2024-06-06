// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/html-self-closing': 'off'
  },
  plugins: {
    'plugin:prettier/recommended': {}
  }
})
