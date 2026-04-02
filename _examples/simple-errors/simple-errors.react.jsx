/* %partial% */
import { useState } from 'react'
import { FormKit } from '@formkit/react'
/* %partial% */

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

export default function App() {
  return <SimpleErrorsExample />
}
