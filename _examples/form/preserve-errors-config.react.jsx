import { FormKit, setErrors } from '@formkit/react'
import { useEffect } from 'react'

function PreserveErrorsConfigExample() {
  useEffect(() => {
    setErrors('register', [], {
      username: 'That username is taken.',
      password: 'Your password is too simple.',
    })
  }, [])

  return (
    <>
      {/* %partial% */}
      <FormKit
        type="form"
        onSubmit={() => false}
        id="register"
        config={{ preserveErrors: true }}
      >
        <FormKit
          name="username"
          label="Username"
          help="Select a new username"
        />
        <FormKit name="password" label="Password" />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <PreserveErrorsConfigExample />
}
