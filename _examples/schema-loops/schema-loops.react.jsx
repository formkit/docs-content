// %partial%
import { useState } from 'react'
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'ul',
    attrs: {
      class: 'city-list',
    },
    children: [
      {
        $el: 'li',
        for: ['item', 'key', '$cities'],
        children: '$: ($key + 1) + ": " + $item',
      },
    ],
  },
]

function Example() {
  const [cities, setCities] = useState(['Boston', 'Amsterdam', 'Nairobi'])
  const [city, setCity] = useState('')
  const data = { cities }

  function addCity() {
    setCities((current) => current.concat(city))
    setCity('')
  }

  return (
    <>
      <FormKit
        type="text"
        label="Add a city"
        help="Add a city and hit enter"
        modelValue={city}
        onUpdateModelValue={setCity}
        onKeyUp={(event) => {
          if (event.key === 'Enter') addCity()
        }}
      />
      <FormKitSchema schema={schema} data={data} />
    </>
  )
}
// %partial%

export default function App() {
  return <Example />
}
