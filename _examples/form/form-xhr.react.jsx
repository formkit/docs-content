import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormXhrExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
