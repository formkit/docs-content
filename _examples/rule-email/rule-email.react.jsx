import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="email"
        label="Email address"
        validation="email"
        validationVisibility="live"
        value="andrew@formkit"
      />
      {/* %partial% */}
    </>
  )
}
