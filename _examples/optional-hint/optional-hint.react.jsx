import { FormKit } from '@formkit/react'

// %partial%
const submit = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert('Password changed!')
}

function OptionalHintExample() {
  return (
    <FormKit type="form" onSubmit={submit}>
      <h2>Change password</h2>
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|?length:10"
        validationMessages={{
          length: 'Try to make your password longer!',
        }}
      />
      <FormKit
        type="password"
        label="Confirm password"
        name="password_confirm"
        validation="required|confirm"
      />
    </FormKit>
  )
}
// %partial%

export default function App() {
  return <OptionalHintExample />
}
