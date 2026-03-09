import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="number"
        label="Kitchen renovation budget"
        help="Enter the most you'd like to spend on your kitchen renovation."
        validation="min:5000"
        validationMessages={{
          min: 'Sorry - we only build high-end kitchens. Try Budget Builders.',
        }}
        validationVisibility="live"
        value="1000"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
