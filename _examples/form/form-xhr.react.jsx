/* %partial% */
import { FormKit } from '@formkit/react'

const axios = {
  post: () => new Promise((resolve) => setTimeout(resolve, 2000)),
}

async function login(credentials) {
  await axios.post(credentials)
  alert('Logged in!')
}

function FormXhrExample() {
  return (
    <FormKit type="form" submitLabel="Login" onSubmit={login}>
      <FormKit name="email" label="Email address" validation="required|email" />
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required"
      />
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <FormXhrExample />
}
