import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function FormDisabledExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" disabled>
        <FormKit label="Username" value="@vue-lover" />
        <FormKit label="Password" type="password" value="i-love-formkit" />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormDisabledExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
