import { FormKit } from '@formkit/react'

function FormDisabledExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" disabled>
        <FormKit label="Username" value="@vue-lover" />
        <FormKit label="Password" type="password" value="i-love-formkit" />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <FormDisabledExample />
}
