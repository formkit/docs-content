import { useState } from 'react'
import { FormKit } from '@formkit/react'

export default function App() {
  const [value, setValue] = useState([])
  const sum = new Intl.NumberFormat('en-US').format(
    value.reduce((total, price) => Number(price) + total, 0)
  )

  return (
    <>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="checkbox"
        label="Trim extras"
        options={{
          650: 'Leather seats ($650)',
          1200: 'Sweet rims ($1,200)',
          13250: 'Gold leaf ($13,250)',
          500: 'Massaging seats ($500)',
        }}
        help="Configure your car's trim options"
      />
      <pre>{`Extra cost: $${sum}`}</pre>
      {/* %partial% */}
    </>
  )
}
