// %partial%
import { FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h1',
    children: '$orchard.tree.fruit',
    attrs: {
      class: 'text-2xl font-bold mb-4',
    },
  },
]

const data = {
  orchard: {
    tree: {
      fruit: 'apple',
    },
  },
}

function Example() {
  return <FormKitSchema schema={schema} data={data} />
}
// %partial%

export default function App() {
  return <Example />
}
