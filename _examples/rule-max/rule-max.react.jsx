import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="number"
        name="Quantity"
        label="Quantity"
        validation="max:5"
        validationVisibility="live"
        value="6"
      />
      {/* %partial% */}
    </>
  )
}
