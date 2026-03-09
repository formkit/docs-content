import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="email"
        label="Student email address"
        help="Please enter your student email address."
        validation="required|email|ends_with:.edu"
        validationVisibility="live"
        placeholder="vikas@school.edu"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
