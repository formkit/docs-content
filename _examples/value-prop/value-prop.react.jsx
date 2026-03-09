import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKit } from '@formkit/react'

function ValuePropExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        label="Username"
        type="text"
        help="Pick a new username"
        validation="required|matches:/^@[a-zA-Z]+$/|length:5"
        value="@FormKit"
      />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <ValuePropExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
