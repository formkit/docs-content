/* %partial% */
import { FormKit, useFormKitContextById } from '@formkit/react'

const initialValues = {
  a: 2,
  b: 3,
}

function UseFormKitContextByIdExample() {
  const formContext = useFormKitContextById('myForm')
  const values = formContext?.value ?? initialValues
  const sum = (values.a ?? 0) + (values.b ?? 0)

  return (
    <FormKit type="form" id="myForm" value={initialValues}>
      <div className="flex gap-4 items-center">
        <FormKit type="number" name="a" number />
        <FormKit type="number" name="b" number />
        <div className="whitespace-nowrap">= {sum}</div>
      </div>
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <UseFormKitContextByIdExample />
}
