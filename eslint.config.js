import storybook from 'eslint-plugin-storybook';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  [
    globalIgnores(['dist']),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        prettier,
        import: importPlugin,
      },
      rules: {
        'prettier/prettier': ['warn', { singleQuote: true }],
        quotes: ['error', 'single'],
        'no-duplicate-imports': 'error',
        'import/order': [
          'warn',
          {
            'newlines-between': 'never', // 👈 убираем пустые строки между группами
          },
        ],
      },
    },
  ],
  storybook.configs['flat/recommended'],
);
