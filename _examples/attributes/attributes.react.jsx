import { FormKit } from '@formkit/react'

function AttributesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="text" label="Favorite flavor" data-category="pizza" />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <AttributesExample />
}
