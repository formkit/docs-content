import { FormKit } from '@formkit/react'

export default function StepThree() {
  return (
    <FormKit
      type="textarea"
      label="Please supply contact information for 2 references"
      validation="required"
    />
  )
}
