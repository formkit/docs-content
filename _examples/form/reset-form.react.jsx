/* %partial% */
import { useState } from 'react'
import { FormKit, reset } from '@formkit/react'

function ResetFormExample() {
  const [complete, setComplete] = useState(false)

  async function handleSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setComplete(true)
    reset('newsletterForm')
  }

  return (
    <FormKit type="form" id="newsletterForm" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">Newsletter</h2>
      <p className="text-base mb-4">
        When this form is submitted the form is reset.
      </p>
      {complete ? <div className="success">Submitted successfully!</div> : null}
      <FormKit
        name="email"
        validation="required|email"
        label="Email address"
        help="What email address would you like to receive our newsletter at?"
      />
      <FormKit
        type="radio"
        name="email_pref"
        label="Email frequency"
        validation="required"
        help="How often should we send you a newsletter?"
        options={{ daily: 'Daily', weekly: 'Weekly', monthly: 'Monthly' }}
      />
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <ResetFormExample />
}
