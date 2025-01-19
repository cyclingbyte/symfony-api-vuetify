import ESLint from '@eslint/js'
import ESLintConfigPrettier from 'eslint-config-prettier'
import Oxlint from 'eslint-plugin-oxlint'
import globals from 'globals'
import TSESLint from 'typescript-eslint'

export default TSESLint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['{dist,public}/**/*'],
  },
  ESLint.configs.recommended,
  ...TSESLint.configs.recommended,
  Oxlint.configs['flat/recommended'],
  ESLintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {},
    rules: {},
  },
)