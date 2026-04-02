import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* Set submit text with label prop */}
      <FormKit
        type="submit"
        label="Checkout my label"
        help="You can use the label prop."
      />
      {/* %partial% */}
    </>
  )
}
