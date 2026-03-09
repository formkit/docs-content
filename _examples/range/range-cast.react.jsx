import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            {/* %partial% */}
            <FormKit
              type="range"
              label="Hourly wage"
              number
              name="wage"
              value="50"
              min="7"
              max="120"
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
            {/* %partial% */}
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
