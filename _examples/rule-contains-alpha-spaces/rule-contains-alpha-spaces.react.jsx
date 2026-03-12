import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Full name"
        value="010101!"
        validation="contains_alpha_spaces"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
