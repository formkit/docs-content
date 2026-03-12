import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="password"
        label="Password"
        help="Please enter your password."
        validation="matches:/[0-9]/"
        validationVisibility="live"
        validationMessages={{ matches: 'Passwords must include a number.' }}
        value="password"
      />
      {/* %partial% */}
    </>
  )
}
