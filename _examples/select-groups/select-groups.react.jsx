import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="select"
        label="Letters or numbers"
        options={[
          {
            group: 'Letters',
            options: ['A', 'B', 'C'],
          },
          {
            group: 'Numbers',
            options: [1, 2, 3],
          },
        ]}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
