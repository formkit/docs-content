import { FormKit } from '@formkit/react'
import AddressInputGroup from './address-input-group.react.jsx'

function ShippingForm() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form">
        <h1>Shipping Information</h1>
        <FormKit
          type="text"
          name="full_name"
          label="Full Name"
          prefixIcon="avatar"
          validation="required"
          help="Please enter your first and last name"
        />
        {/* 👀 No bindings */}
        <AddressInputGroup />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default ShippingForm
