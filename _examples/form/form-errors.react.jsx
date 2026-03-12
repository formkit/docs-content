import { FormKit } from '@formkit/react'

function FormErrorsExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="form"
        onSubmit={() => false}
        submitLabel="Login"
        errors={['Our server is not working.', "But we don't like you anyway!"]}
      >
        <FormKit type="email" label="Email address" />
        <FormKit type="password" label="Password" />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <FormErrorsExample />
}
