import { FormKit } from '@formkit/react'

// %partial%
// Let's pretend this is an expensive API call.
const username_exists = function ({ value }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value === 'formkit-4-life'), 200)
  })
}

function DebounceHintExample() {
  return (
    <FormKit
      label="Username"
      validation="(500)username_exists"
      validationVisibility="live"
      validationRules={{ username_exists }}
      validationMessages={{
        username_exists: "Sorry, that username is taken. Try 'formkit-4-life'.",
      }}
    />
  )
}
// %partial%

export default function App() {
  return <DebounceHintExample />
}
