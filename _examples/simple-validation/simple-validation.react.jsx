import { FormKit } from '@formkit/react'

function SimpleValidationExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Username"
        validation="required|alpha|length:10"
      />
      {/* The input above has 3 validation rules:
          "required", "alpha", and "length" */}
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <SimpleValidationExample />
}
