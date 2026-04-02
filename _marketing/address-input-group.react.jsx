import { FormKit } from '@formkit/react'

const states = {
  VA: 'Virginia',
  WV: 'West Virginia',
}

export default function AddressInputGroup() {
  return (
    <>
      {/* %partial% */}
      {/* 🪄 grouped inputs */}
      <FormKit type="group" name="address">
        <div className="flex gap-2">
          {/* 🤯 no data modeling */}
          <FormKit label="Street Address" name="street" />
          <FormKit label="Unit" name="unit" />
        </div>
        <div className="flex gap-2">
          <FormKit label="City" name="city" />
          <FormKit type="autocomplete" name="state" options={states} />
          <FormKit label="Zip Code" name="zip" />
        </div>
      </FormKit>
      {/* %partial% */}
    </>
  )
}
