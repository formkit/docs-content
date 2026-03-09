import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <FormKit name="account" type="group">
        {({ state: { valid } }) => (
          <>
            {!valid ? (
              <div className="not-valid">Your account details are not complete!</div>
            ) : (
              <div className="valid">It all looks good</div>
            )}
            <FormKit
              label="Username"
              name="username"
              help="Select a new username"
              validation="required|alpha"
            />
            <FormKit label="Password" name="password" validation="required" />
            <FormKit
              label="Password"
              name="password_confirm"
              help="Confirm your password"
              validation="required|confirm"
            />
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
