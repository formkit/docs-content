import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="barcode"
        label="Barcode"
        help="Please scan a barcode"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
