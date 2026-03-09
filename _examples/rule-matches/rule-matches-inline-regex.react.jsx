import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="password"
        label="Password"
        help="Please enter your password."
        validation="matches:/[0-9]/"
        validationVisibility="live"
        validationMessages={{ matches: 'Passwords must include a number.' }}
        value="password"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
