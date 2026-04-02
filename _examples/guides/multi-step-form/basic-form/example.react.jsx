import { FormKit } from '@formkit/react'

const styles =
  "@import url('https://cdn.formk.it/web-assets/multistep-form.css');"

function BasicFormExample() {
  return (
    <>
      {/* %partial% */}
      <h1 className="text-2xl font-bold mb-4">Carbon Sequestration Grant</h1>

      <FormKit type="form">
        {({ value }) => (
          <div className="form-body">
            <h3 className="text-lg font-bold mb-2">Contact info</h3>
            <FormKit
              type="email"
              label="*Email address"
              validation="required|email"
            />

            <h3 className="text-lg font-bold mb-2">Organization info</h3>
            <FormKit
              type="text"
              label="*Organization name"
              validation="required|length:3"
            />

            <h3 className="text-lg font-bold mb-2">Application</h3>
            <FormKit
              type="textarea"
              label="*How will you use the money?"
              validation="required|length:20,500"
            />

            <details>
              <summary>Form data</summary>
              <pre>{JSON.stringify(value, null, 2)}</pre>
            </details>
          </div>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <BasicFormExample />
    </>
  )
}
