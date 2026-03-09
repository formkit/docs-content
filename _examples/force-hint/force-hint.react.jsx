import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="email"
        label="Email address"
        validation="length:5|*email"
        validationVisibility="live"
        help="Enter less than 5 characters to see both rules appear."
      />
      {/* By default, the "email" validation rule would
          not run if the "length" rule was failing. */}
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
