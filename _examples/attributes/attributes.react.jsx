import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { FormKit } from '@formkit/react'

function AttributesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="text" label="Favorite flavor" data-category="pizza" />
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <AttributesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
