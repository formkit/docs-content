import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Enter your desired username"
        value="$!@#"
        validation="contains_alphanumeric"
        validationLabel="username"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
