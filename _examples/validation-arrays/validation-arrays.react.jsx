import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Phone"
        placeholder="xxx-xxx-xxxx"
        validation={[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]}
        validationVisibility="live"
        validationMessages={{
          matches: 'Phone number must be formatted: xxx-xxx-xxxx',
        }}
      />
      {/* %partial% */}
    </>
  )
}
