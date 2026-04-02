/* %partial% */
import { useState } from 'react'
import { getValidationMessages } from '@formkit/validation'
import { FormKit } from '@formkit/react'

function SubmitInvalidExample() {
  const [messages, setMessages] = useState([])

  function showErrors(node) {
    const validations = node ? getValidationMessages(node) : []
    const nextMessages = []

    validations.forEach((inputMessages) => {
      nextMessages.push(...inputMessages.map((message) => message.value))
    })

    setMessages(nextMessages)
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Support ticket</h2>
      <FormKit type="form" onSubmitInvalid={showErrors}>
        {messages.length ? (
          <ul className="validation-errors">
            {messages.map((message, index) => (
              <li key={`${message}-${index}`}>{message}</li>
            ))}
          </ul>
        ) : null}
        <FormKit
          name="title"
          label="Ticket title"
          help="A short sentence that describes your problem."
          validation="required"
        />
        <FormKit
          name="issue"
          type="textarea"
          label="Issue"
          help="Please describe your issue in detail."
          validation="required|length:50,500"
        />
      </FormKit>
    </>
  )
}
/* %partial% */

export default function App() {
  return <SubmitInvalidExample />
}
