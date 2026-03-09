import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NodeRefExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
