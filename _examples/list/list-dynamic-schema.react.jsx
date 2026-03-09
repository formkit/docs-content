import { createRoot } from 'react-dom/client'
import {
  FormKit,
  FormKitProvider,
  FormKitSchema,
  defaultConfig,
} from '@formkit/react'

// %partial%
const data = {
  addItem: (node) => () => node.input(node._value.concat([''])),
  stringify: JSON.stringify,
}

const schema = {
  $formkit: 'form',
  children: [
    {
      $formkit: 'list',
      name: 'links',
      value: [''],
      dynamic: true,
      children: [
        {
          $formkit: 'text',
          for: ['item', 'index', '$items'],
          key: '$item',
          index: '$index',
          label: 'Link',
          validation: 'required|url',
          validationVisibility: 'submit',
        },
        {
          $formkit: 'button',
          onClick: '$addItem($node)',
          children: 'Add a link',
        },
      ],
    },
    {
      $el: 'pre',
      attrs: { wrap: true },
      children: '$stringify($value)',
    },
  ],
}

function App() {
  return <FormKitSchema schema={schema} data={data} library={{ FormKit }} />
}
// %partial%

createRoot(document.getElementById('app')).render(
  <FormKitProvider config={defaultConfig()}>
    <App />
  </FormKitProvider>
)
