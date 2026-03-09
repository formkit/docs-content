import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormKit type="form" actions={false}>
        {({ value: values }) => (
          <>
            {/* %partial% */}
            <FormKit
              type="number"
              help="I will always parse as a float"
              label="Spoons of sugar (float)"
              number
              name="sugar_float"
              value="3.25"
            />
            <FormKit
              type="number"
              help="I will always be an integer"
              label="Age (integer)"
              number="integer"
              name="age_integer"
              value="25"
            />
            <pre>{JSON.stringify(values, null, 2)}</pre>
            {/* %partial% */}
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
