import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../formkit.config.react.jsx'
import MultiStepContent from './multi-step-content.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      {/* default tab style */}
      <FormKit type="multi-step" tabStyle="tab">
        <MultiStepContent />
      </FormKit>

      {/* progress tab style */}
      <FormKit type="multi-step" tabStyle="progress">
        <MultiStepContent />
      </FormKit>

      {/* progress tab style w/ hidden labels */}
      <FormKit type="multi-step" tabStyle="progress" hideProgressLabels={true}>
        <MultiStepContent />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
