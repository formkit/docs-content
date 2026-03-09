import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
const sandwichToppings = [
  { label: 'Lettuce', value: 'lettuce' },
  { label: 'Tomato', value: 'tomato' },
  { label: 'Onion', value: 'onion' },
  { label: 'Pickles', value: 'pickles' },
  { label: 'Cheese', value: 'cheese' },
  { label: 'Mayo', value: 'mayo' },
  { label: 'Mustard', value: 'mustard' },
  { label: 'Ketchup', value: 'ketchup' },
  { label: 'Avocado', value: 'avocado' },
  { label: 'Bacon', value: 'bacon' },
  { label: 'Ham', value: 'ham' },
  { label: 'Turkey', value: 'turkey' },
  { label: 'Chicken', value: 'chicken' },
  { label: 'Roast Beef', value: 'roast-beef' },
  { label: 'Salami', value: 'salami' },
  { label: 'Pastrami', value: 'pastrami' },
  { label: 'Tuna', value: 'tuna' },
  { label: 'Egg Salad', value: 'egg-salad' },
]

function DropdownExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          <FormKit
            type="dropdown"
            name="sandwich_toppings"
            label="Select as many toppings as you would like"
            placeholder="Lettuce, tomato, onion, etc."
            options={sandwichToppings}
            multiple
            popover
            defaultValue={['lettuce', 'tomato']}
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <DropdownExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
