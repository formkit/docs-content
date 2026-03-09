import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKit } from '@formkit/react'

function SchemaWrappersExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        sectionsSchema={{
          outer: { $el: null },
          inner: { $el: null },
          messages: { $el: null },
          message: { $el: 'div' },
        }}
        validation="+accepted"
        validationVisibility="live"
        label="Terms and conditions"
        help="Do you accept our terms and conditions?"
      />
      {/* Remove the "inner" property of the schema object
          and see the inner wrapper reappear. */}
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <SchemaWrappersExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
