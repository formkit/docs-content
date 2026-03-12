import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="select"
        label="Which country is the smallest?"
        name="small_country"
        options={['Monaco', 'Vatican City', 'Maldives', 'Tuvalu']}
      />
      {/* %partial% */}
    </>
  )
}
