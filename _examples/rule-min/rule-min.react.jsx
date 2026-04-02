import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="number"
        label="Kitchen renovation budget"
        help="Enter the most you'd like to spend on your kitchen renovation."
        validation="min:5000"
        validationMessages={{
          min: 'Sorry - we only build high-end kitchens. Try Budget Builders.',
        }}
        validationVisibility="live"
        value="1000"
      />
      {/* %partial% */}
    </>
  )
}
