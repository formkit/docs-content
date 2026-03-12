import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            type="range"
            label="Hourly wage"
            number
            name="wage"
            value="50"
            min="7"
            max="120"
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
          {/* %partial% */}
        </>
      )}
    </FormKit>
  )
}
