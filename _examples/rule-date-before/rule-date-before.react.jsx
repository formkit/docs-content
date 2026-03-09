import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="date"
        label="Birthday"
        help="Enter your birthday (must be born before 2011)"
        validation="date_before:2011-01-01"
        validationVisibility="live"
        value="2020-01-01"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
