import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit type="multi-step">
        <FormKit
          type="step"
          name="stepOne"
          label="My Custom Label"
          nextLabel="Continue to next step"
        >
          <FormKit type="text" label="Name" />
        </FormKit>

        <FormKit
          type="step"
          name="stepTwo"
          previousLabel="Go back to previous step"
        >
          <FormKit type="textarea" label="Your story" />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
