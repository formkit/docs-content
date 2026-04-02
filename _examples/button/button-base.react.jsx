import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* Set button text with label prop */}
      <FormKit
        type="button"
        label="Checkout my label"
        help="You can use the label prop."
      />
      {/* %partial% */}
    </>
  )
}
