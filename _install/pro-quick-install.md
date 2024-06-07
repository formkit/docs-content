```js
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, datepicker } from '@formkit/pro'

const proPlugin = createProPlugin('fk-############', {
  datepicker, 
  // any other Pro Inputs
})

export default defineFormKitConfig({
  plugins: [proPlugin],
})
```