import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Social handle"
        value="foo123"
        validation="alpha:latin"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
