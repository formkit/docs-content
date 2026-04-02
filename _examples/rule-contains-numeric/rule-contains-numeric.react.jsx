import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Enter your desired gamertag"
        value="Smackdown"
        validation="contains_numeric"
        validationVisibility="live"
        validationLabel="gamertag"
      />
      {/* %partial% */}
    </>
  )
}
