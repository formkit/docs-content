import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="file"
        label="Your files"
        help='This input starts with files already "attached".'
        multiple
        value={[{ name: 'purple-taste.pdf' }, { name: 'chocolate-recipe.docx' }]}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
