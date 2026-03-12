import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Your username"
        value="calypso"
        help="Pick a username people will remember!"
      />
      {/* %partial% */}
    </>
  )
}
