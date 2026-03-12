import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Twitter Handle"
        placeholder="@username"
        validation="starts_with:@"
        validationVisibility="live"
        value="FormKit"
      />
      {/* %partial% */}
    </>
  )
}
