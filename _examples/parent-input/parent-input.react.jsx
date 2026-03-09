import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKit } from '@formkit/react'

function ParentInputExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="group"
        name="address"
        value={{
          street: '456 Mangrove St',
          city: 'Franklin',
          state: 'ny',
        }}
      >
        <FormKit label="Street" name="street" />
        <FormKit name="city" label="City" />
        <FormKit
          type="select"
          name="state"
          label="State"
          options={{
            ca: 'California',
            ny: 'New York',
            va: 'Virginia',
          }}
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <ParentInputExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
