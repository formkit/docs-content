import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
// %partial%
import { FormKitSchema } from '@formkit/react'

const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'select',
      id: 'drink',
      label: 'Drink',
      placeholder: 'Pick your drink',
      options: {
        coffee: 'Drip coffee',
        espresso: 'Espresso shot',
        tea: 'Tea',
      },
      validation: 'required',
    },
  },
  {
    $cmp: 'FormKit',
    if: '$get(drink).value',
    props: {
      type: 'radio',
      label: '$: "Drink options (" + $get(drink).value + ")"',
      options: {
        if: '$get(drink).value === coffee',
        then: ['Large', 'Medium', 'Small'],
        else: {
          if: '$get(drink).value === espresso',
          then: ['Single shot', 'Double shot'],
          else: ['Earl grey', 'Matcha', 'Green tea', 'Jasmine'],
        },
      },
    },
  },
]

function Example() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Order a beverage</h2>
      <FormKitSchema schema={schema} />
    </>
  )
}
// %partial%

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
