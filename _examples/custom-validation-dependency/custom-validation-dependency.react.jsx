import { FormKit } from '@formkit/react'

// %partial%
function distinct(node) {
  // use node traversal to get the parent node
  const parent = node.at('$parent')
  if (parent.value) {
    // Ensure all the siblings are different values
    for (const childName in parent.value) {
      if (childName === node.name) continue
      if (parent.value[childName] === node.value) {
        return false
      }
    }
  }
  return true
}

function CustomValidationDependencyExample() {
  return (
    <FormKit
      type="form"
      onSubmit={() => false}
      config={{
        validationVisibility: 'live',
      }}
      value={{
        first: 'Same',
        second: 'Same',
        third: 'Different',
      }}
    >
      <FormKit
        label="First item"
        name="first"
        validationRules={{ distinct }}
        validation="distinct"
      />
      <FormKit
        label="Second item"
        name="second"
        validationRules={{ distinct }}
        validation="distinct"
      />
      <FormKit
        label="Third item"
        name="third"
        validationRules={{ distinct }}
        validation="distinct"
      />
    </FormKit>
  )
}
// %partial%

export default function App() {
  return <CustomValidationDependencyExample />
}
