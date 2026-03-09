import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../_no-tailwind/formkit.config.react.jsx'

function ResettingClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        classes={{
          outer: 'foo-bar',
          inner: {
            $reset: true,
          },
        }}
        outerClass="$reset only-me-please"
      />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={config}>
      <ResettingClassesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
