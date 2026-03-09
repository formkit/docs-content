import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'

const myInput = createInput(
  {
    $el: 'button',
    for: ['option', '$options'],
    attrs: {
      class: '$classes.input',
      placeholder: '$: "Hello " + $location',
      onClick: '$handlers.setValue($option)',
      ariaSelected: '$: $option === $value',
    },
    children: ['$currency', '$option'],
  },
  {
    props: {
      capitalize: {
        boolean: true,
      },
      currency: {
        default: '',
      },
      options: {
        setter(value, node) {
          let options
          if (typeof value === 'string') {
            options = value.split(',')
          } else {
            options = value
          }
          if (node.props.capitalize) {
            options = options.map(
              (option) => option[0].toUpperCase() + option.slice(1)
            )
          }
          return options
        },
      },
    },
    features: [
      function setValues(node) {
        node.on('created', () => {
          node.context.handlers.setValue = (value) => () => node.input(value)
        })
      },
    ],
  }
)

function CustomPropsObjectNotationExample() {
  const [value, setValue] = useState({})

  return (
    <>
      <FormKit
        type="group"
        modelValue={value}
        onUpdateModelValue={(nextValue) => setValue(nextValue ?? {})}
      >
        <FormKit
          type={myInput}
          name="planet"
          label="Select a hospitable planet"
          capitalize
          options="earth,mars,venus"
          inputClass="border-2 border-gray-300 mr-2 mb-2 px-2 py-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm aria-[selected=true]:bg-gray-200 dark:bg-gray-800 dark:aria-[selected=true]:bg-blue-900 dark:border-gray-700 dark:focus:ring-gray-500 dark:focus:border-gray-500"
        />
        <FormKit
          type={myInput}
          name="price"
          label="Price"
          currency="$"
          options={['10.00', '12.99', '15.00']}
          help="How much are you willing to pay?"
          inputClass="border-2 border-gray-300 mr-2 mb-2 px-2 py-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm aria-[selected=true]:bg-gray-200 dark:bg-gray-800 dark:aria-[selected=true]:bg-blue-900 dark:border-gray-700 dark:focus:ring-gray-500 dark:focus:border-gray-500"
        />
      </FormKit>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CustomPropsObjectNotationExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
