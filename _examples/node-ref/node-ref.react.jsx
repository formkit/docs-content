/* %partial% */
import { useRef } from 'react'
import { FormKit } from '@formkit/react'

function NodeRefExample() {
  const myInput = useRef(null)

  function setEmail() {
    myInput.current?.input('djokovic@tennis.gov')
  }

  return (
    <>
      <FormKit ref={myInput} label="Email address" />
      <FormKit type="button" onClick={setEmail} label="Click to set email" />
    </>
  )
}
/* %partial% */

export default function App() {
  return <NodeRefExample />
}
