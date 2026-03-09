import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  const [list, setList] = useState([
    'john@formkit.com',
    'sasha@formkit.com',
    'andrew@formkit.com',
  ])

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit modelValue={list} onUpdateModelValue={setList} type="list">
        <p className="text-base mb-4">Please provide a list of emails.</p>
        <FormKit label="Email address" validation="required|email" />
        <FormKit label="Email address" validation="required|email" />
        <FormKit label="Email address" validation="required|email" />
      </FormKit>
      <pre>{JSON.stringify(list, null, 2)}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
