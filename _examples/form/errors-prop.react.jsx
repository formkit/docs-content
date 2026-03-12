import { FormKit } from '@formkit/react'

function ErrorsPropExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" onSubmit={() => false}>
        <FormKit
          type="checkbox"
          label="Shirt style"
          disabled
          options={['Hawaiian', 'V-Neck', 'Blouse', 'Chambrey']}
          errors={['Sorry, we are out of shirts.']}
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <ErrorsPropExample />
}
