import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="url"
        label="What is your website url?"
        validation="url"
        validationVisibility="live"
        value="formkit.com"
      />
      {/* %partial% */}
    </>
  )
}
