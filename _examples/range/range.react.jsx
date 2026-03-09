import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  const [value, setValue] = useState(6)

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="range"
        label="Volume"
        min="0"
        max="11"
        help="Select your volume level."
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
