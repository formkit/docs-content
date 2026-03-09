import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import formkitConfig from './formkit.config.react.jsx'

const config = defaultConfig(formkitConfig())

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="mask"
        name="tracking"
        mask="usps-zzz-zzzz-zzzz-zzzz"
        defaultValue="usps-mk6-8d2z-8fggy-921x"
        label="Tracking number"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
