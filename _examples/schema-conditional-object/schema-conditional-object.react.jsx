import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
// %partial%
import { useState } from 'react'
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h2',
    children: {
      if: '$value < 5',
      then: '$value + " is less than 5"',
      else: {
        if: '$value >= 5 && $value <= 10',
        then: '$value + " is between 5 and 10"',
        else: '$value + " is more than 10"',
      },
    },
    attrs: {
      class: 'text-xl font-bold',
    },
  },
]

function Example() {
  const [value, setValue] = useState(0)
  const data = { value }

  return (
    <>
      <FormKit
        type="number"
        modelValue={value}
        onUpdateModelValue={setValue}
        label="Enter a number between 5-10"
      />
      <FormKitSchema schema={schema} data={data} />
    </>
  )
}
// %partial%

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
