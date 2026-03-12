import { FormKit } from '@formkit/react'

// %partial%
const customMessage = ({ name, args, node }) => {
  return `${node.value} is not a ${name}. Select ${args[0]}, ${args[1]}, or ${args[2]}`
}

function ValidationCustomMessagesFunctionExample() {
  return (
    <FormKit
      type="select"
      label="Favorite JS framework?"
      placeholder="Select a framework"
      options={['Vue', 'React', 'Angular', 'Laravel', 'Django']}
      validation="required|is:Vue,React,Angular"
      validationLabel="JS framework"
      validationVisibility="live"
      validationMessages={{
        required: 'Pick your favorite framework',
        is: customMessage,
      }}
    />
  )
}
// %partial%

export default function App() {
  return <ValidationCustomMessagesFunctionExample />
}
