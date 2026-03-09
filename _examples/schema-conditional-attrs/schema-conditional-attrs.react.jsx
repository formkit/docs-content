import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
// %partial%
import { useState } from 'react'
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h1',
    if: '$drink',
    attrs: {
      style: {
        color: {
          if: '$drink == Vodka',
          then: 'blue',
          else: {
            if: '$drink == Whisky',
            then: 'brown',
            else: 'tan',
          },
        },
      },
    },
    children: '$drink',
  },
]

function Example() {
  const [drink, setDrink] = useState(null)
  const data = { drink }

  return (
    <>
      <FormKit
        type="select"
        modelValue={drink}
        onUpdateModelValue={setDrink}
        label="Select a spirit"
        placeholder="Select a spirit"
        options={['Vodka', 'Whisky', 'Rum']}
        help="Select your favorite base for cocktails."
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
