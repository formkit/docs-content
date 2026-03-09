import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const config = defaultConfig({
  icons: { ...genesisIcons },
})

function App() {
  const [value, setValue] = useState([])

  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="checkbox"
        label="Toppings"
        options={['Mushrooms', 'Olives', 'Salami', 'Anchovies']}
        decoratorIcon="happy"
        help="Select your pizza toppings"
        validation="required|min:3"
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
