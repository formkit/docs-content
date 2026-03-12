// %partial%
import { useState } from 'react'
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h1',
    children: ['Hello ', '$location'],
    attrs: {
      class: 'text-2xl font-bold mb-4',
    },
  },
]

function Example() {
  const [location, setLocation] = useState('World')
  const data = { location }

  function move() {
    setLocation((current) => (current === 'World' ? 'Mars' : 'World'))
  }

  return (
    <>
      <FormKitSchema schema={schema} data={data} />
      <FormKit type="button" onClick={move}>
        Change location
      </FormKit>
    </>
  )
}
// %partial%

export default function App() {
  return <Example />
}
