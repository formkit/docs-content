import { FormKitSchema } from '@formkit/react'

function Example() {
  return (
    <>
      {/* %partial% */}
      <FormKitSchema
        schema={[
          {
            $formkit: 'email',
            label: 'Email address',
            help: 'Please enter your email address.',
          },
        ]}
      />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <Example />
}
