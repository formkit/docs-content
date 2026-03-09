import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../_no-tailwind/formkit.config.react.jsx'

function AppendClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        outerClass="i-will-be-appended"
        wrapperClass={{
          'i-will-append': true,
          'i-will-not': false,
        }}
      />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={config}>
      <AppendClassesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
