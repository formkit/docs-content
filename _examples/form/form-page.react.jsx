import { FormKit } from '@formkit/react'

function FormPageExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="form"
        submitLabel="Login"
        action="https://enpae7aofyxlml7.m.pipedream.net"
        method="post"
      >
        <FormKit
          name="email"
          label="Email address"
          validation="required|email"
        />
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required"
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <FormPageExample />
}
