import { createRoot } from 'react-dom/client'
// %partial%
import { useState } from 'react'
import { FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h1',
    bind: '$someAttributes',
    children: 'Click me!',
  },
]

function Example() {
  const [colorClass, setColorClass] = useState('!text-red-500')
  const data = {
    someAttributes: {
      class: colorClass,
      onClick: () => {
        setColorClass((current) =>
          current === '!text-red-500' ? '!text-blue-500' : '!text-red-500'
        )
      },
      'data-fruit': 'I like fruit',
    },
  }

  return <FormKitSchema schema={schema} data={data} />
}
// %partial%

function App() {
  return <Example />
}

createRoot(document.getElementById('app')).render(<App />)
