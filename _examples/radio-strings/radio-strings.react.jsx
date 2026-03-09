import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  const [value, setValue] = useState()

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="radio"
        label="Preferred transportation"
        options={['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']}
        help="How do you like to get around?"
      />
      <pre>{value}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
