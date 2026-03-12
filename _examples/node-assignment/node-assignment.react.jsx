import { FormKit, useFormKitNodeById } from '@formkit/react'

function NodeAssignmentExample() {
  const node = useFormKitNodeById('ssn')

  // %partial%
  function addValidation() {
    if (node) {
      node.props.validation = 'required|matches:/\\d{3}-\\d{2}-\\d{4}/'
    }
  }
  // %partial%

  return (
    <>
      <FormKit
        id="ssn"
        label="Social security number"
        type="text"
        help="Initially this input has no validation"
        placeholder="XXX-XX-XXXX"
        validationVisibility="live"
      />

      <FormKit type="button" onClick={addValidation}>
        Add validation
      </FormKit>
    </>
  )
}
// %partial%

export default function App() {
  return <NodeAssignmentExample />
}
