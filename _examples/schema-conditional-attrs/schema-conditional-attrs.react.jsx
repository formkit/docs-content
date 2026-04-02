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

export default function App() {
  return <Example />
}
