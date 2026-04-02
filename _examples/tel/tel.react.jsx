import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="tel"
        label="Phone number"
        placeholder="xxx-xxx-xxxx"
        validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        validationMessages={{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }}
        validationVisibility="dirty"
      />
      {/* %partial% */}
    </>
  )
}
