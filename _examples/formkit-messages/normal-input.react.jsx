import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'

/* %partial% */
import { useState } from 'react'
import { FormKit, FormKitMessages } from '@formkit/react'

function NormalInputMessagesExample() {
  const [inputNode, setInputNode] = useState(undefined)

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <FormKit
        type="text"
        onNode={setInputNode}
        validation="required|length:4"
        validationVisibility="live"
        label="Dinosaur name"
        placeholder="Stegosaurus"
      />
      {/* messages will be rendered here instead */}
      <FormKitMessages node={inputNode} />
    </div>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NormalInputMessagesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
