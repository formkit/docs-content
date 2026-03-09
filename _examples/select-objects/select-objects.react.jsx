import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="select"
        label="What country makes the best food?"
        name="country"
        placeholder="Select a country"
        options={[
          { label: 'France', value: 'fr', attrs: { disabled: true } },
          { label: 'Germany', value: 'de', attrs: { disabled: true } },
          { label: 'Spain', value: 'es', attrs: { disabled: true } },
          { label: 'Italy', value: 'ie' },
          { label: 'Greece', value: 'gr', attrs: { disabled: true } },
        ]}
        help="Don't worry, you can't get this one wrong."
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
