import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKit } from '@formkit/react'

function DelayPropExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="group">
        {({ value }) => (
          <>
            <FormKit
              name="email"
              type="email"
              label="Email"
              help="Notice it takes a full second for the data to update."
              delay={1000}
              validation="required|length:5|email"
              validationVisibility="live"
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <DelayPropExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
