import { FormKit } from '@formkit/react'

function PreservePropExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            type="checkbox"
            value={true}
            name="beverage"
            label="Include a beverage?"
            help="Select a beverage, then uncheck me to see if data is preserved."
          />
          {value?.beverage ? (
            <FormKit
              preserve
              type="radio"
              name="beverage_type"
              options={['Tea', 'Coffee']}
              label="Beverage"
              help="Select a beverage please."
            />
          ) : null}

          <pre>{JSON.stringify(value, null, 2)}</pre>
          {/* %partial% */}
        </>
      )}
    </FormKit>
  )
}

export default function App() {
  return <PreservePropExample />
}
