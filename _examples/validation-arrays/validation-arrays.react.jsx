import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Phone"
        placeholder="xxx-xxx-xxxx"
        validation={[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]}
        validationVisibility="live"
        validationMessages={{
          matches: 'Phone number must be formatted: xxx-xxx-xxxx',
        }}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
