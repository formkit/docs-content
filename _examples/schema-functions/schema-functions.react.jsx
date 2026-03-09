import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
