import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Enter your desired gamertag"
        value="bistro3000"
        validation="contains_uppercase"
        validationVisibility="live"
        validationLabel="gamertag"
      />
      {/* %partial% */}
    </>
  )
}
