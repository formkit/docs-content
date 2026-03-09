import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="tel"
        label="Phone number"
        placeholder="xxx-xxx-xxxx"
        validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        validationMessages={{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }}
        validationVisibility="dirty"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
