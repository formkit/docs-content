import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            <FormKit
              type="checkbox"
              label="Terms and Conditions"
              help="Do you agree to our terms of service?"
              name="terms"
              value={true}
              validation="accepted"
              validationVisibility="dirty"
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
