import { useState } from 'react'
import { FormKit } from '@formkit/react'

export default function App() {
  const [value, setValue] = useState(6)

  return (
    <>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="range"
        label="Volume"
        min="0"
        max="11"
        help="Select your volume level."
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      {/* %partial% */}
    </>
  )
}
