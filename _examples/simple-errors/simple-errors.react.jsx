import { createRoot } from 'react-dom/client'
/* %partial% */
import { useState } from 'react'
import { FormKit } from '@formkit/react'
/* %partial% */
import { FormKitProvider, defaultConfig } from '@formkit/react'

/* %partial% */
function SimpleErrorsExample() {
  const [fruit, setFruit] = useState('')
  const errors = fruit ? [`Sorry, we are sold out of ${fruit}`] : []

  return (
    <FormKit
      type="select"
      label="Fruit"
      placeholder="Select a fruit"
      modelValue={fruit}
      onUpdateModelValue={setFruit}
      options={['Apple', 'Peach', 'Pear']}
      errors={errors}
    />
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <SimpleErrorsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
