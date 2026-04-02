/* %partial% */
import { FormKit, createInput } from '@formkit/react'

const myInput = createInput('Hello world')

function CreateInputExample() {
  return (
    <FormKit
      type={myInput}
      label="Hello world example"
      help="You still cant interact with me, but im here!"
      validation="required"
      validationVisibility="live"
    />
  )
}
/* %partial% */

export default function App() {
  return <CreateInputExample />
}
