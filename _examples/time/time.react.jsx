import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="time"
        label="Time"
        value="23:15"
        help="What time will go home today?"
      />
      {/* %partial% */}
    </>
  )
}
