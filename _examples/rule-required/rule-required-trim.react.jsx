import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Favorite food"
        validation="required:trim"
        validationVisibility="live"
        help="Enter spaces. Whitespace won't make this rule pass."
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
