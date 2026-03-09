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
              type="text"
              label="Atmospheric pressure"
              number
              name="pressure"
              help="My value will be a number if it can be parsed by parseFloat"
              value="29.82"
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
