import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        placeholder="#00ff00"
        label="Hexidecimal Color"
        validation={[['matches', /^#[a-fA-F0-9]{6}$/]]}
        validationVisibility="live"
        value="#00ff0"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
