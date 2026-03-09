import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="text"
        label="What's a food you might find in a breakfast buffet?"
        validation="is:eggs,bacon,sausage,coffee"
        validationVisibility="live"
        validationLabel="year"
        validationMessages={{ is: 'Not this buffet - try another.' }}
        value="cake"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
