import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit } from '@formkit/react'

const helloWorld = {
  type: 'input',
  schema: ['Hello world'],
}

function CustomInputExample() {
  return <FormKit type={helloWorld} />
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CustomInputExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
