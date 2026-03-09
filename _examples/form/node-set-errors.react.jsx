import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit } from '@formkit/react'

function submitHandler(data, node) {
  if (data.username !== 'formkit4life') {
    node.setErrors(['There was an error in this form'], {
      username: 'Sorry, that username is not available.',
    })
  } else {
    alert('Great, you are registered')
  }
}

function NodeSetErrorsExample() {
  return (
    <FormKit type="form" onSubmit={submitHandler}>
      <FormKit
        name="username"
        label="Username"
        help="What username would you like?"
        validation="required|length:5"
      />
    </FormKit>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NodeSetErrorsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
