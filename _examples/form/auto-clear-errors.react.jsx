import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { useEffect } from 'react'
import { FormKit, setErrors } from '@formkit/react'

function AutoClearErrorsExample() {
  useEffect(() => {
    setErrors('my-form', ['This form has some errors'], {
      first_input: 'This error will clear when you type.',
      second_input: 'This error will remain even after typing.',
    })
  }, [])

  function clearErrors(_formData, node) {
    node.clearErrors()
  }

  return (
    <FormKit
      id="my-form"
      type="form"
      onSubmit={clearErrors}
      submitLabel="Submit to clear all errors"
    >
      <FormKit
        name="first_input"
        label="Auto-clearing error"
        value="Change me!"
        help="When you edit this input the error will clear"
      />
      <FormKit
        name="second_input"
        preserveErrors
        label="Preserved error"
        value="Or change me!"
        help="Sometimes it is best to keep an error until a user submits the form."
      />
    </FormKit>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <AutoClearErrorsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
