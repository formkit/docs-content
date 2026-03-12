### React

If you're adding FormKit to an existing React application, install the React package and its core input packages:

```sh
npm install @formkit/react @formkit/core @formkit/inputs
```

If your project does not already include React itself, install `react` and `react-dom` as well.

FormKit for React is provided through a `FormKitProvider` and the `<FormKit />` component:

```tsx
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

export default function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormKit type="text" name="email" label="Email" />
    </FormKitProvider>
  )
}
```

That's it. Once the provider is mounted, you can start using `<FormKit />` anywhere inside your React tree.
