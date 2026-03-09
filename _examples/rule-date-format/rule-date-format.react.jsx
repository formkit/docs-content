import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Birthday"
        help="Enter your birthday in the format: MM/DD/YYYY"
        validation="date_format:MM/DD/YYYY"
        validationVisibility="live"
        value="1988-05-14"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
