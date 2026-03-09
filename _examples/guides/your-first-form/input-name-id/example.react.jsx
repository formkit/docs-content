import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <>
        {/* %partial% */}
        {/* Always specify a name */}
        {/* and optionally an id if you need to target a specific input */}
        <FormKit type="text" name="name" id="name" />
        {/* %partial% */}
      </>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
