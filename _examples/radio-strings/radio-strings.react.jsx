import { useState } from 'react'
import { FormKit } from '@formkit/react'

export default function App() {
  const [value, setValue] = useState()

  return (
    <>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="radio"
        label="Preferred transportation"
        options={[
          'E-Bike',
          'E-Scooter',
          'Electric car',
          'Walking',
          'Space tube',
        ]}
        help="How do you like to get around?"
      />
      <pre>{value}</pre>
      {/* %partial% */}
    </>
  )
}
