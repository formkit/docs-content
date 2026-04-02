// %partial%
import { FormKitSchema } from '@formkit/react'

const data = {
  field: 'Username',
}

const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'text',
      label: '$field',
      __raw__sectionsSchema: {
        prefix: {
          $el: 'div',
          attrs: {
            class:
              '$classes.prefix + " py-0 px-2 text-sm stretch flex items-center bg-gray-200 mr-2 rounded dark:bg-gray-800"',
          },
          children: '$label',
        },
      },
    },
  },
]

function Example() {
  return <FormKitSchema data={data} schema={schema} />
}
// %partial%

export default function App() {
  return <Example />
}
