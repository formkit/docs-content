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
              type="textarea"
              name="instructions"
              label="Your Essay"
              placeholder="Remember to write in complete sentences."
              help={`${value.instructions ? value.instructions.length : 0} / 120`}
              validation="length:0,120"
              validationVisibility="live"
              validationMessages={{
                length: 'Instructions cannot be more than 120 characters.',
              }}
            />
            {/* %partial% */}
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
