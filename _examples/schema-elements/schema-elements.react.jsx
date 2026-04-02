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

export default function App() {
  return <FormKitSchema schema={schema} />
}
