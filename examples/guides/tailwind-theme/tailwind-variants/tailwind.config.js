// Because the FormKit.com playground is browser-based
// with ESM imports, this config is structured differently
// than your actual tailwind.config.js would be in your
// own project.

import { formKitTailwind } from '@formkit/themes'

window.tailwind.config = {
  plugins: [
    formKitTailwind
  ]
}