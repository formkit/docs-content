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

export default function App() {
  return <CustomPropsCreateInputExample />
}
