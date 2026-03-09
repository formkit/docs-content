import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKitSchema } from '@formkit/react'

function Example() {
  return (
    <>
      {/* %partial% */}
      <FormKitSchema
        schema={[
          {
            $formkit: 'email',
            label: 'Email address',
            help: 'Please enter your email address.',
          },
        ]}
      />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
