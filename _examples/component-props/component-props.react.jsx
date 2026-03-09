import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Health insurance group"
        placeholder="G-XXXXX"
        validation="required|matches:/^G-\\d{5}$/"
        validationVisibility="live"
        validationMessages={{
          matches: 'Must be in the format G-12345',
        }}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
