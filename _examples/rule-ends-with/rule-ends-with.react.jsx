import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="email"
        label="Student email"
        validation="email|ends_with:.edu"
        validationVisibility="live"
        value="andrew@formkit.com"
      />
      {/* %partial% */}
    </>
  )
}
