import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Enter your desired username"
        value="Dinosaur Rider"
        validation="lowercase"
        validationVisibility="live"
        validationLabel="username"
      />
      {/* %partial% */}
    </>
  )
}
