import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="number"
        label="Age"
        value="16"
        validation="between:18,25"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
