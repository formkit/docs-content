import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        label="Terms of service"
        validation="accepted"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
