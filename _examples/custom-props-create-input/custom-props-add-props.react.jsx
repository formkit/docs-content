import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'

function useLocation(node) {
  node.addProps({
    location: {
      default: 'World',
    },
  })
}

const myInput = createInput(
  {
    $el: 'input',
    attrs: {
      class: '$classes.input',
      placeholder: '$: "Hello " + $location',
    },
  },
  {
    family: 'text',
    features: [useLocation],
  }
)

function CustomPropsAddPropsExample() {
  return (
    <FormKit
      type={myInput}
      label="Hello where?"
      location="Andromeda"
      help="We used a feature with node.addProps() to add a location"
    />
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CustomPropsAddPropsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
