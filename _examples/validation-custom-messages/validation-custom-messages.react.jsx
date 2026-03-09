import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        label="NBA G.O.A.T?"
        placeholder="Jordan, LeBron, Curry etc..."
        validation="is:Jordan,jordan"
        validationVisibility="live"
        validationMessages={{
          is: 'The correct answer is: Jordan.',
        }}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
