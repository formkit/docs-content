import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        options={['Pepperoni', 'Sausage', 'Olives', 'Feta', 'Mushrooms']}
        label="Pizza toppings"
        help="Select up to three of your favorite toppings."
        validation="max:3"
        validationVisibility="live"
        value={['Pepperoni', 'Sausage', 'Olives', 'Feta']}
      />
      {/* %partial% */}
    </>
  )
}
