import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'

function GenerateClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="text" />
      <FormKit type="email" />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={config}>
      <GenerateClassesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
