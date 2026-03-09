import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        value={[]}
        label="Indian food"
        options={[
          {
            value: 'item-2',
            label: 'Bhajji',
            help: 'Fried chickpea batter - spicy.',
          },
          {
            value: 'item-55',
            label: 'Vada Pav (out of stock)',
            help: 'Fried vegetarian dumplings.',
            attrs: { disabled: true },
          },
          {
            value: 'item-22',
            label: 'Paratha',
            help: 'Flatbread layered and pan friend.',
          },
          {
            value: 'item-44',
            label: 'Halwa',
            help: 'Pudding made with flour.',
          },
        ]}
        help="Select your favorite Indian dishes."
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
