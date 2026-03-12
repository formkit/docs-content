import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            type="text"
            label="Atmospheric pressure"
            number
            name="pressure"
            help="My value will be a number if it can be parsed by parseFloat"
            value="29.82"
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
          {/* %partial% */}
        </>
      )}
    </FormKit>
  )
}
