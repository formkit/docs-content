/* %partial% */
import { FormKit } from '@formkit/react'

const helloWorld = {
  type: 'input',
  schema: ['Hello world'],
}

function CustomInputExample() {
  return <FormKit type={helloWorld} />
}
/* %partial% */

export default function App() {
  return <CustomInputExample />
}
