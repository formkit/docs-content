import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Age"
        validation="number"
        value="27365 days old"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
