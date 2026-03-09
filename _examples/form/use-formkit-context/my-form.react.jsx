import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit } from '@formkit/react'
import Address from './address.react.jsx'

function MyFormExample() {
  return (
    <FormKit type="form" onSubmit={() => false}>
      <FormKit name="name" label="Name" help="Enter your name" />
      <Address />
    </FormKit>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <MyFormExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
