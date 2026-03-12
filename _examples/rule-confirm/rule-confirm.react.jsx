import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="group">
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required"
          validationVisibility="live"
        />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm password"
          validation="required|confirm"
          validationVisibility="live"
          validationLabel="Confirmation"
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
