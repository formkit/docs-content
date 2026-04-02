import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="group">
        <FormKit
          label="Meat"
          type="text"
          name="meats"
          validation="require_one:veggies"
          validationVisibility="live"
        />
        <FormKit
          label="Veggies"
          type="checkbox"
          name="veggies"
          validation="require_one:meats"
          validationVisibility="live"
          options={[
            { label: 'Mushroom', value: 3 },
            { label: 'Onion', value: 4 },
          ]}
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
