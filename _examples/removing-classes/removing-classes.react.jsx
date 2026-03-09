import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../_no-tailwind/formkit.config.react.jsx'

function RemovingClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        outerClass={{
          'formkit-outer': false,
        }}
      />
      <FormKit outerClass="$remove:formkit-outer" />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={config}>
      <RemovingClassesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
