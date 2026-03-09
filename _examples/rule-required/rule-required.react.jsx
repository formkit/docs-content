import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        options={['Indubitably']}
        label="Please agree to the terms and conditions of how awesome FormKit is"
        validation="required"
        validationMessages={{
          required: 'This field is required.',
        }}
        validationVisibility="live"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
