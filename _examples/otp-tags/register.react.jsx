import { useState } from 'react'

export { default as formkitConfig } from './formkit.config.react.jsx'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'
import OneTimePassword from './one-time-password.react.jsx'

const otp = createInput(OneTimePassword, {
  props: ['digits'],
})

function OtpTagsExample() {
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
          digits="4"
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

export default function App() {
  return <OtpTagsExample />
}
