import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="barcode"
        label="UPC-A Scanner"
        help="I only scan UPC-A barcodes"
        formats={['UPC_A']}
      />
      <FormKit
        type="barcode"
        label="QR Code Scanner"
        help="I only scan QR codes"
        formats={['QR_CODE']}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
