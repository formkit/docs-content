import { useState } from 'react'

import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  // %partial%
  const [fruit, setFruit] = useState(null)

  const submitApp = async (_formData, node) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    node.setErrors(['This is an example form-level error.'])
  }
  // %partial%

  return (
    <>
      {/* %partial% */}
      <FormKit type="form" onSubmit={submitApp}>
        <FormKit type="repeater">
          <FormKit
            label="username"
            type="text"
            defaultValue="hello"
            validation="required|length:6"
            validationVisibility="live"
          />
          <FormKit
            label="Email"
            type="email"
            defaultValue="invalid@foo."
            validation="required|email"
            validationVisibility="live"
            help="Change me to see animations"
          />
        </FormKit>

        <FormKit
          modelValue={fruit}
          onUpdateModelValue={(value) =>
            setFruit(typeof value === 'string' ? value : null)
          }
          label="Select a fruit"
          help="Conditional fields at the root form level will also be animated"
          type="radio"
          name="fruit"
          placeholder="Select the best country"
          options={['None', 'Apple', 'Strawberry', 'Banana']}
        />
        {fruit && fruit !== 'None' ? (
          <FormKit
            type="checkbox"
            validation="required|accepted"
            validationLabel="Confirmation"
            label={`Please confirm that you meant to select ${fruit}.`}
          />
        ) : null}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
