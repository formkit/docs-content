import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            type="hidden"
            number="integer"
            name="account_id"
            value="98213321"
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
          {/* %partial% */}
        </>
      )}
    </FormKit>
  )
}
