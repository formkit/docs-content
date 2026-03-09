/* %partial% */
import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'

createRoot(document.getElementById('app')).render(
  <FormKitProvider
    config={defaultConfig({
      config: {
        classes: {
          input: 'my-class',
        },
      },
    })}
  />
)
/* %partial% */
