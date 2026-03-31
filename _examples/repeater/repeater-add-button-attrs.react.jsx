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
    <FormKit type="form" actions={false}>
      {/* %partial% */}
      <FormKit
        name="users"
        type="repeater"
        label="Philosophy Department Teaching Staff"
        addLabel="My custom 'Add Professor' button"
        help="Edit the staff page here."
      >
        <FormKit
          label="Professor Name"
          name="email"
          validation="required|email"
          placeholder="Add professor name..."
        />
        <FormKit
          name="bio"
          type="textarea"
          label="Professor Bio"
          placeholder="Enter bio here..."
        />
      </FormKit>
      {/* %partial% */}
    </FormKit>
  )
}
