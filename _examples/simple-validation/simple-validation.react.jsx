import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKit } from '@formkit/react'

function SimpleValidationExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Username"
        validation="required|alpha|length:10"
      />
      {/* The input above has 3 validation rules:
          "required", "alpha", and "length" */}
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <SimpleValidationExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
