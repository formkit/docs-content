import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
function DropdownExample() {
  return (
    <div>
      <FormKit label="No options" options={[]} type="dropdown" popover />
      <FormKit
        label="No options, empty message set."
        options={[]}
        type="dropdown"
        popover
        emptyMessage="No options here!"
      />
    </div>
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <DropdownExample />
}
