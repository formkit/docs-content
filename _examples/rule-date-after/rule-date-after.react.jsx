import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="date"
        label="Birthday"
        help="Enter your birthday (must be born after 1999)"
        validation="date_after:1999-12-31"
        validationVisibility="live"
        validationMessages={{
          date_after: 'Sorry - no olds allowed.',
        }}
        value="1988-05-14"
      />
      {/* %partial% */}
    </>
  )
}
