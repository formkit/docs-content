import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit type="group">
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required"
          validationVisibility="live"
        />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm password"
          validation="required|confirm"
          validationVisibility="live"
          validationLabel="Confirmation"
        />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
