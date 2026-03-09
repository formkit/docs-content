import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  const [value, setValue] = useState('lama')

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="radio"
        label="Stuffed animal"
        options={{
          teddy: 'Bear',
          lama: 'Lama',
          lizard: 'Lizard',
          giraffe: 'Giraffe',
        }}
        help="What is your favorite stuffed animal?"
      />
      <pre>{value}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
