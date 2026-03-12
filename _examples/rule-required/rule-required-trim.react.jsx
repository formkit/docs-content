import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Favorite food"
        validation="required:trim"
        validationVisibility="live"
        help="Enter spaces. Whitespace won't make this rule pass."
      />
      {/* %partial% */}
    </>
  )
}
