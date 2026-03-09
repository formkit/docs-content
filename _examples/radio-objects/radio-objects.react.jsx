import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  const [value, setValue] = useState('saving-ryan')

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="radio"
        label="Best movie"
        options={[
          { label: 'Shawshank redemption', value: 'shawshank' },
          { label: 'The Godfather', value: 'godfather' },
          { label: 'Casablanca (too old)', value: 'casablanca', attrs: { disabled: true } },
          { label: 'The Lord of the Rings', value: 'lotr' },
          { label: 'Saving Private Ryan', value: 'saving-ryan' },
        ]}
        help="What is the best movie of all time?"
      />
      <pre>{value}</pre>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
