import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <FormKit
      type="form"
      actions={false}
      defaultValue={{ users: [{ email: 'justin@formkit.com ' }] }}
    >
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            name="users"
            type="repeater"
            label="Users"
            draggable
          >
            {({ index }) => (
              <FormKit
                type="email"
                label={`${index + 1}. Email`}
                name="email"
                validation="required|email"
                placeholder="Add email address..."
              />
            )}
          </FormKit>
          {/* %partial% */}
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
