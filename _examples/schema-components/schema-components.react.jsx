import { createRoot } from 'react-dom/client'
// %partial%
import { FormKitSchema } from '@formkit/react'

function CustomComponent({ name }) {
  return <>Hello {name}</>
}

const library = {
  MyComponent: CustomComponent,
}

const schema = [
  {
    $cmp: 'MyComponent',
    props: {
      name: 'Jane',
    },
  },
]

function Example() {
  return <FormKitSchema schema={schema} library={library} />
}
// %partial%

function App() {
  return <Example />
}

createRoot(document.getElementById('app')).render(<App />)
