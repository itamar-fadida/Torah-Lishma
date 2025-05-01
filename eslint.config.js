import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import css from '@eslint/css';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: '19.0.0', // Specify React version
      },
    },
    rules: {
      // With React 19, React no longer needs to be in scope
      'react/react-in-jsx-scope': 'off',
      // Auto-fix the missing rel attribute
      'react/jsx-no-target-blank': [
        'error',
        { enforceDynamicLinks: 'always', allowReferrer: false },
      ],
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: { prettier: pluginPrettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  json.configs.recommended,
  css.configs.recommended,
]);
