import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Number"
        validation="required|number|between:20,50"
        validationVisibility="live"
        help="Enter a number between 20 and 50."
      />
      {/* %partial% */}
    </>
  )
}
