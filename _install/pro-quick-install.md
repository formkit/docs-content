```js
import { createProPlugin, datepicker, mask } from '@formkit/pro'

const proPlugin = createProPlugin('fk-#########', {
  datepicker, 
  mask,
  // any other Pro Inputs
})

const config = defaultConfig({
  plugins: [proPlugin],
})
```