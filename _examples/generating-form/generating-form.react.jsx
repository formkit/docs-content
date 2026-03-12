// %partial%
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $formkit: 'email',
    label: 'Email address',
    validation: 'required',
  },
]

function Example() {
  return (
    <FormKit type="form" onSubmit={() => false}>
      <FormKitSchema schema={schema} />
    </FormKit>
  )
}
// %partial%

export default function App() {
  return <Example />
}
