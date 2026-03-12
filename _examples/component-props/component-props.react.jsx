import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Health insurance group"
        placeholder="G-XXXXX"
        validation="required|matches:/^G-\\d{5}$/"
        validationVisibility="live"
        validationMessages={{
          matches: 'Must be in the format G-12345',
        }}
      />
      {/* %partial% */}
    </>
  )
}
