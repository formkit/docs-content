import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="datetime-local"
        value="2020-03-13T18:22"
        label="End of the world"
        help="When will the end of the world take place?"
        validation="required|date_after"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
