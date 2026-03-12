### React

Start by creating a React app with your preferred tooling. A Vite starter is a good default:

```sh
# TypeScript
npm create vite@latest my-app -- --template react-ts

# JavaScript
npm create vite@latest my-app -- --template react

cd my-app
npm install
```

Then install FormKit:

```sh
npm install @formkit/react @formkit/core @formkit/inputs
```

Once those packages are installed, wire FormKit into your app with a `FormKitProvider`:

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
