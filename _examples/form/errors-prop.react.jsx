import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function ErrorsPropExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" onSubmit={() => false}>
        <FormKit
          type="checkbox"
          label="Shirt style"
          disabled
          options={['Hawaiian', 'V-Neck', 'Blouse', 'Chambrey']}
          errors={['Sorry, we are out of shirts.']}
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <ErrorsPropExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
