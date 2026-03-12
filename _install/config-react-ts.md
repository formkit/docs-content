## Configuration

To configure FormKit in React, create a `formkit.config.ts` file in your project root and export it with `defineFormKitConfig()`:

### formkit.config.ts
```ts
import { fr } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  locales: { fr },
  locale: 'fr',
})
```

### App.tsx (or equivalent)
```tsx
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import formkitConfig from './formkit.config'

export default function App() {
  return (
    <FormKitProvider config={defaultConfig(formkitConfig())}>
      <FormKit type="text" name="email" label="Email" />
    </FormKitProvider>
  )
}
```
