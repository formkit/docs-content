import { FormKit, useFormKitContext } from '@formkit/react'

export default function Address() {
  const form = useFormKitContext()
  const name = useFormKitContext('name')

  useFormKitContext('address.city', () => {
    alert('Showing city!')
  })

  return (
    <>
      <h2>Address</h2>
      <FormKit type="group" name="address">
        <div className="flex gap-4">
          <FormKit name="street" label="Street" />
          <FormKit name="street_2" label="Street 2" />
        </div>
        <FormKit
          type="checkbox"
          name="usa"
          label="Are you in the United States?"
        />
        {form?.value?.address?.usa ? (
          <div className="flex gap-4">
            <FormKit name="city" label="City" />
            <FormKit
              type="select"
              name="state"
              label="State"
              options={{ va: 'Virginia', nc: 'North Carolina' }}
            />
          </div>
        ) : null}
      </FormKit>
      Your name: {name?.value}
    </>
  )
}
