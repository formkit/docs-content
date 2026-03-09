import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'

const myInput = createInput('Hello world')

function CreateInputExample() {
  return (
    <FormKit
      type={myInput}
      label="Hello world example"
      help="You still cant interact with me, but im here!"
      validation="required"
      validationVisibility="live"
    />
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CreateInputExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
