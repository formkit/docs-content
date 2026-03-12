import { useState } from 'react'
import { FormKit } from '@formkit/react'

export default function App() {
  const [value, setValue] = useState('lama')

  return (
    <>
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
    </>
  )
}
