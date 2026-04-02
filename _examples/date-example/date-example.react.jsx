import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="date"
        value="1999-01-01"
        label="Birthday"
        help="Enter your birth day"
        validation="required|date_before:2010-01-01"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
