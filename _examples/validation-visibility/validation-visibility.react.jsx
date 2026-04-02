import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* config is passed down to descendant inputs: */}
      <FormKit
        type="form"
        onSubmit={() => false}
        config={{ validationVisibility: 'submit' }}
      >
        <FormKit
          type="text"
          label="Name"
          validation="required|length:3"
          help="Enter your full name."
        />
        <FormKit
          type="date"
          label="Birthday"
          validation="required|date_between:1990-01-01 00:00:00,1999-12-31 23:59:59"
          validationMessages={{
            date_between: 'Only for those born in the 90s.',
          }}
          help="Enter your date of birth"
        />
        {/* We override validation-visibility for the input below: */}
        <FormKit
          type="tel"
          label="Phone Number"
          placeholder="xxx-xxx-xxxx"
          validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          validationVisibility="live"
          help="What are your digits?"
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
