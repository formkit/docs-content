import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Floating Text Label via prop"
        floatingLabel
      />
      <FormKit
        type="textarea"
        label="Floating Textarea Label via prop"
        floatingLabel
      />
      <FormKit type="text" label="I have a standard label" />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
