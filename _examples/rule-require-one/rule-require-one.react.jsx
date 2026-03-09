import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit type="group">
        <FormKit
          label="Meat"
          type="text"
          name="meats"
          validation="require_one:veggies"
          validationVisibility="live"
        />
        <FormKit
          label="Veggies"
          type="checkbox"
          name="veggies"
          validation="require_one:meats"
          validationVisibility="live"
          options={[
            { label: 'Mushroom', value: 3 },
            { label: 'Onion', value: 4 },
          ]}
        />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
