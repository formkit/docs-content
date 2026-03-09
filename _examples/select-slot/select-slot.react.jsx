import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  const [value, setValue] = useState('earth')

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="select"
        label="Where would you prefer to live?"
        name="planet"
        modelValue={value}
        onUpdateModelValue={setValue}
      >
        <optgroup label="Inner Planets">
          <option value="mercury">Mercury</option>
          <option value="venus">Venus</option>
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
        </optgroup>
        <optgroup label="Outer planets">
          <option value="jupiter">Jupiter</option>
          <option value="saturn">Saturn</option>
          <option value="uranus">Uranus</option>
          <option value="neptune">Neptune</option>
        </optgroup>
      </FormKit>
      <pre>{value}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
