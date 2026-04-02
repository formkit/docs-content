import { FormKit, FormKitSchema, defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
const schema = [
  {
    $formkit: 'repeater',
    name: 'users',
    children: [
      {
        $formkit: 'text',
        name: 'email',
        label: '$: ($index + 1) + ". Email"',
        validation: 'required|email',
      },
    ],
  },
]
// %partial%

export default function App() {
  return (
    <FormKit
      type="form"
      actions={false}
      defaultValue={{ users: [{ email: 'justin@formkit.com ' }] }}
    >
      {({ value }) => (
        <>
          <FormKitSchema schema={schema} library={{ FormKit }} />
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
