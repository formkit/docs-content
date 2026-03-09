import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, submitForm } from '@formkit/react'

function handleSubmitForm() {
  submitForm('newsletter')
}

function submitToMailchimp(data) {
  alert(`Submitted ${data.email} successfully!`)
}

function FormSubmitExample() {
  return (
    <>
      <FormKit
        type="form"
        id="newsletter"
        actions={false}
        onSubmit={submitToMailchimp}
      >
        <FormKit
          type="email"
          name="email"
          validation="required|email"
          label="Email address"
          help="What email address should we send our newsletter to?"
        />
      </FormKit>
      <p className="text-xs font-italic mb-2">
        This button is not part of the above form:
      </p>
      <FormKit type="button" onClick={handleSubmitForm}>
        Signup for newsletter
      </FormKit>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormSubmitExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
