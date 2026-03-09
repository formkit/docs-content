import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import config from './formkit.config.react.jsx'
/* %partial% */
import { FormKit } from '@formkit/react'

function CustomInputDefaultConfigExample() {
  return <FormKit type="hello" />
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig(config())}>
      <CustomInputDefaultConfigExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
