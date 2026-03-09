import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import formkitConfig from './formkit.config.react.jsx'

const config = defaultConfig(formkitConfig())

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      {/*
        The validation prop is not set here but both
        inputs are receiving the validation prop
        from the formkit config file.
      */}
      <FormKit
        label="Username"
        validationVisibility="live"
      />
      <FormKit
        type="password"
        label="Password"
        validationVisibility="live"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
