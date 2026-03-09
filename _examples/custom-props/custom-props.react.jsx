import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit } from '@formkit/react'

const hello = {
  type: 'input',
  props: ['location'],
  schema: [
    {
      $el: 'h1',
      children: ['Hello ', '$location'],
    },
  ],
}

function CustomPropsExample() {
  return <FormKit type={hello} location="Mars" />
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CustomPropsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
