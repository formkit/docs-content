import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        options={{
          form_1: 'Forms',
          form_2: 'Forms',
          form_3: 'Forms',
          form_4: 'Forms',
        }}
        label="Select at least 2 of your interests."
        validation="min:2"
        validationLabel="Interests"
        validationVisibility="live"
        value={['form_1']}
      />
      {/* %partial% */}
    </>
  )
}
