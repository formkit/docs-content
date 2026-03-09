import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'
import OneTimePassword from './one-time-password.react.jsx'

const otp = createInput(OneTimePassword)

function FirstValueExample() {
  const [values, setValues] = useState({})

  return (
    <>
      <FormKit
        type="form"
        modelValue={values}
        onUpdateModelValue={(value) => setValues(value ?? {})}
      >
        <FormKit
          type={otp}
          label="One-time password"
          name="two_factor_code"
          help="We’ve sent a code to your phone."
          validation="required"
          validationVisibility="live"
        />
      </FormKit>

      <pre>{JSON.stringify(values, null, 2)}</pre>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FirstValueExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
