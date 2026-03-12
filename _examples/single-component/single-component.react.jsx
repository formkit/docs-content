import { FormKit } from '@formkit/react'

function SingleComponentExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="text" />
      <FormKit type="textarea" />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <SingleComponentExample />
}
