import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Input"
        value="Test value"
        validation="symbol"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
