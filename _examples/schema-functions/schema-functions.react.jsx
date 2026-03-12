// %partial%
import { useState } from 'react'
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h1',
    children: ['$count', ' + 5 = ', '$add($count, 5)'],
    attrs: {
      class: 'text-2xl font-bold mb-4',
    },
  },
]

function Example() {
  const [count, setCount] = useState(3)
  const data = {
    count,
    add: (a, b) => a + b,
  }

  return (
    <>
      <FormKitSchema schema={schema} data={data} />
      <FormKit type="button" onClick={() => setCount((current) => current + 1)}>
        Add To Count
      </FormKit>
    </>
  )
}
// %partial%

export default function App() {
  return <Example />
}
