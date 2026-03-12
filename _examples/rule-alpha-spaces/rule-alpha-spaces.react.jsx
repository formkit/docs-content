import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Full Name"
        value="Elly Punsayer123"
        validation="alpha_spaces:latin"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
