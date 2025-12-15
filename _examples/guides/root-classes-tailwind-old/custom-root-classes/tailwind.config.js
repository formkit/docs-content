export default {
  mode: 'jit', // we'll be using JIT mode in this example
  // These paths are just examples, customize them to match your project structure
  // learn more here: https://v2.tailwindcss.com/docs/just-in-time-mode
  purge: [
    './public/**/*.html',
    './src/**/*.{js,mjs,jsx,ts,tsx,vue}',
  ],
  // any other Tailwind config changes you wish to make here are fine,
  // but outside the scope of this guide.
}
