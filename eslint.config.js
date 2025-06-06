// Simplified ESLint configuration to avoid missing dependencies.
// The previous setup referenced packages like `@eslint/js` that are not installed
// in this environment. This minimal flat config allows `npm run lint` to work
// without additional packages.

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Basic rule retained from the original config
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
];
