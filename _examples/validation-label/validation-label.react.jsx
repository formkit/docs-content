import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="What is your favorite color?"
        validation="required"
        validationLabel="Color"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
