module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
  semi: false,
  singleQuote: true,
}
