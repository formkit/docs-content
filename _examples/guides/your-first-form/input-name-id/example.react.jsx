import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* Always specify a name */}
      {/* and optionally an id if you need to target a specific input */}
      <FormKit type="text" name="name" id="name" />
      {/* %partial% */}
    </>
  )
}
