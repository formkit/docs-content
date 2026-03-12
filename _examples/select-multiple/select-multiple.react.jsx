import { useState } from 'react'
import { FormKit } from '@formkit/react'

export default function App() {
  const [values, setValues] = useState(['allergies'])

  return (
    <>
      {/* %partial% */}
      <FormKit
        modelValue={values}
        onUpdateModelValue={setValues}
        type="select"
        multiple
        label="Serious medical conditions"
        name="medical_conditions"
        options={[
          { label: 'Outie belly button', value: 'outie' },
          { label: 'Large feet', value: 'lg-feet' },
          { label: 'Neck beard', value: 'neard' },
          { label: 'Tiny hands', value: 'trump-hands' },
        ]}
        help="Select all that apply by holding command (macOS) or control (PC)."
      />
      <pre>{JSON.stringify(values, null, 2)}</pre>
      {/* %partial% */}
    </>
  )
}
