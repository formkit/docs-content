import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Place you'd like to visit"
        validation="not:Hometown"
        validationVisibility="live"
        value="Hometown"
      />
      {/* %partial% */}
    </>
  )
}
