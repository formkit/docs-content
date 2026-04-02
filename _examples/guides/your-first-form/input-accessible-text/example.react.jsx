import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        name="name"
        id="name"
        label="Name"
        help="Your full name"
        placeholder={'"Jon Doe"'}
      />
      {/* %partial% */}
    </>
  )
}
