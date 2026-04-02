import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="email"
        label="Student email address"
        help="Please enter your student email address."
        validation="required|email|ends_with:.edu"
        validationVisibility="live"
        placeholder="vikas@school.edu"
      />
      {/* %partial% */}
    </>
  )
}
