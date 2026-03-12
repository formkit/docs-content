/* %partial% */
import { FormKit } from '@formkit/react'

function handleSubmit() {
  alert('Password reset!')
}

function FormValidityExample() {
  return (
    <FormKit type="form" actions={false} onSubmit={handleSubmit}>
      {({ state: { valid } }) => (
        <>
          <h2 className="text-xl font-bold mb-4">Password reset</h2>
          <FormKit
            type="email"
            label="Email address"
            help="Enter your email address to reset your password"
            validation="required|email"
          />
          <FormKit type="submit" disabled={!valid} />
          <pre>{`Form validity: ${String(valid)}`}</pre>
        </>
      )}
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <FormValidityExample />
}
