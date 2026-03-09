import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'

const myInput = createInput(
  {
    $el: 'input',
    attrs: {
      class: '$classes.input',
      placeholder: '$: "Hello " + $location',
    },
  },
  {
    props: ['location'],
    family: 'text',
  }
)

function CustomPropsCreateInputExample() {
  return (
    <FormKit
      type={myInput}
      label="Hello where?"
      location="Spain"
      help="We use the custom prop location in our placeholder."
    />
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CustomPropsCreateInputExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
