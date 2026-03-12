/* %partial% */
import { FormKit } from '@formkit/react'
import Address from './address.react.jsx'

function MyFormExample() {
  return (
    <FormKit type="form" onSubmit={() => false}>
      <FormKit name="name" label="Name" help="Enter your name" />
      <Address />
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <MyFormExample />
}
