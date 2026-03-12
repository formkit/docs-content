import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

function focusDropdown() {
  document.getElementById('dropdown')?.focus()
}

function DropdownExample() {
  return (
    <div>
      <FormKit type="button" onClick={focusDropdown}>
        Click me to focus dropdown
      </FormKit>
      <FormKit
        id="dropdown"
        type="dropdown"
        name="framework"
        label="Choose a frontend framework"
        placeholder="Example placeholder"
        options={frameworks}
        defaultValue="vue"
        popover
        openOnFocus
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
