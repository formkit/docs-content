import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Xbox gamertag"
        value="007"
        validation="contains_alpha"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
