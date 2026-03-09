import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
// %partial%
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $formkit: 'email',
    label: 'Email address',
    validation: 'required',
  },
]

function Example() {
  return (
    <FormKit type="form" onSubmit={() => false}>
      <FormKitSchema schema={schema} />
    </FormKit>
  )
}
// %partial%

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
