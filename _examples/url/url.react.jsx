import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="url"
        label="Favorite website"
        placeholder="https://www.example.com..."
        validation="required|url"
        help="What is your favorite website?"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
