import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { useState } from 'react'
import { FormKit } from '@formkit/react'

function RegisterExample() {
  const [submitted, setSubmitted] = useState(false)

  async function submitHandler() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
  }

  return (
    <>
      {!submitted ? (
        <FormKit
          type="form"
          id="registration-example"
          submitLabel="Register"
          onSubmit={submitHandler}
          actions={false}
        >
          {({ value }) => (
            <>
              <h1 className="text-2xl font-bold mb-2">Register!</h1>
              <p className="text-sm mb-4">
                You can put any type of element inside a form, not just FormKit
                inputs (although only FormKit inputs are included with the
                submission).
              </p>
              <FormKit
                type="text"
                name="name"
                label="Your name"
                placeholder="Jane Doe"
                help="What do people call you?"
                validation="required"
              />
              <FormKit
                type="text"
                name="email"
                label="Your email"
                placeholder="jane@example.com"
                help="What email should we use?"
                validation="required|email"
              />
              <div className="double">
                <FormKit
                  type="password"
                  name="password"
                  label="Password"
                  validation="required|length:6|matches:/[^a-zA-Z]/"
                  validationMessages={{
                    matches: 'Please include at least one symbol',
                  }}
                  placeholder="Your password"
                  help="Choose a password"
                />
                <FormKit
                  type="password"
                  name="password_confirm"
                  label="Confirm password"
                  placeholder="Confirm password"
                  validation="required|confirm"
                  help="Confirm your password"
                />
              </div>
              <FormKit type="submit" label="Register" />
              <pre>{JSON.stringify(value, null, 2)}</pre>
            </>
          )}
        </FormKit>
      ) : null}
      {submitted ? (
        <div>
          <h2 className="text-xl text-green-500">Submission successful!</h2>
        </div>
      ) : null}
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <RegisterExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
