import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../_no-tailwind/formkit.config.react.jsx'

function ClassesPropExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        classes={{
          outer: '$reset my-class',
          help: {
            'bg-red-500': true,
          },
        }}
        help="Please enter your name above."
      />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={config}>
      <ClassesPropExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
