import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="month"
        help="What month were you born?"
        label="Birth month"
        name="birth_month"
        value="1965-09"
      />
      {/* %partial% */}
    </>
  )
}
