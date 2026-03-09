import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        options={['Pepperoni', 'Sausage', 'Olives', 'Feta', 'Mushrooms']}
        label="Pizza toppings"
        help="Select up to three of your favorite toppings."
        validation="max:3"
        validationVisibility="live"
        value={['Pepperoni', 'Sausage', 'Olives', 'Feta']}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
