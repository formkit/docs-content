import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="color"
        value="#00FF00"
        label="Select a color"
        help="Select your favorite color."
      />
      {/* %partial% */}
    </>
  )
}
