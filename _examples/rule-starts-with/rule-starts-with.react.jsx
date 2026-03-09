import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Twitter Handle"
        placeholder="@username"
        validation="starts_with:@"
        validationVisibility="live"
        value="FormKit"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
