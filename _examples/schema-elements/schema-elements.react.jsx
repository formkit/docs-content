import { createRoot } from 'react-dom/client'
import { FormKitSchema } from '@formkit/react'

// %partial%
const schema = [
  {
    $el: 'div',
    attrs: {
      style: { color: 'red' },
      'data-foo': 'bar',
    },
    children: 'Hello world',
  },
]
// %partial%

function App() {
  return <FormKitSchema schema={schema} />
}

createRoot(document.getElementById('app')).render(<App />)
