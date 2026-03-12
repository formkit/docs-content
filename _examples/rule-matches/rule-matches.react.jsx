import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Language"
        validation="matches:node,php,java,python"
        validationVisibility="live"
        help="Which is your favorite server-side language?"
        value="vue"
      />
      {/* %partial% */}
    </>
  )
}
