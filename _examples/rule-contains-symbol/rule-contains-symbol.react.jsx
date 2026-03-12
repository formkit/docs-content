import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Enter your desired username"
        value="Loves 2 Game"
        validation="contains_symbol"
        validationVisibility="live"
        validationLabel="username"
      />
      {/* %partial% */}
    </>
  )
}
