import { FormKit } from '@formkit/react'

export default function StepOne() {
  return (
    <>
      <FormKit
        type="text"
        label="Name"
        prefixIcon="avatarMan"
        validation="required"
      />
      <FormKit
        type="email"
        label="Email"
        prefixIcon="email"
        validation="required|email"
      />
      <FormKit
        type="text"
        name="phone"
        label="Phone"
        prefixIcon="telephone"
        validation="required"
      />
    </>
  )
}
