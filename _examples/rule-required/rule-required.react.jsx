import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        options={['Indubitably']}
        label="Please agree to the terms and conditions of how awesome FormKit is"
        validation="required"
        validationMessages={{
          required: 'This field is required.',
        }}
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
