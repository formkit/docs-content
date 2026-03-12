import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Echo statement"
        value="HELLO WORLD!"
        validation="contains_lowercase"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
