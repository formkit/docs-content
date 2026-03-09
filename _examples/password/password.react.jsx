import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit type="group">
        <h2>Create a new password</h2>
        <FormKit
          type="password"
          name="password"
          value="super-secret"
          label="Password"
          help="Enter a new password"
          validation="required"
          validationVisibility="live"
        />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm password"
          help="Confirm your new password"
          validation="required|confirm"
          validationVisibility="live"
          validationLabel="Password confirmation"
        />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
