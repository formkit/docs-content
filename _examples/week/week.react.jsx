import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        label="Vacation"
        type="week"
        help="What week will you travel to Fiji?"
        value="2025-W02"
      />
      {/* %partial% */}
    </>
  )
}
