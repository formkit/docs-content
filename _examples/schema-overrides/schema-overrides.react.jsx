import { FormKit } from '@formkit/react'

function SchemaOverridesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        label="Full name"
        help="Please provide your full name."
        sectionsSchema={{
          messages: { $el: 'div' },
          message: { $el: 'span' },
        }}
        validation="required|length:5"
        validationVisibility="live"
      />
      {/* Remove the sectionsSchema prop to see validation
          messages revert to their default HTML. */}
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <SchemaOverridesExample />
}
