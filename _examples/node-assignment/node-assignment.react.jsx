import { createRoot } from 'react-dom/client'
import { getNode } from '@formkit/core'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

// %partial%
function addValidation() {
  const node = getNode('ssn')
  if (node) {
    node.props.validation = 'required|matches:/\\d{3}-\\d{2}-\\2{4}/'
  }
}

function NodeAssignmentExample() {
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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NodeAssignmentExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
