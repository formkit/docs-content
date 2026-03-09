import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <SingleComponentExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
