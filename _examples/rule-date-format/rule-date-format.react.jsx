import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Birthday"
        help="Enter your birthday in the format: MM/DD/YYYY"
        validation="date_format:MM/DD/YYYY"
        validationVisibility="live"
        value="1988-05-14"
      />
      {/* %partial% */}
    </>
  )
}
