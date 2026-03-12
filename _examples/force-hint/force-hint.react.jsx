import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="email"
        label="Email address"
        validation="length:5|*email"
        validationVisibility="live"
        help="Enter less than 5 characters to see both rules appear."
      />
      {/* By default, the "email" validation rule would
          not run if the "length" rule was failing. */}
      {/* %partial% */}
    </>
  )
}
