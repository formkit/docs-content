import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
import countries from '../_data/countries.js'

function DropdownExample() {
  return (
    <>
      <FormKit
        type="dropdown"
        label="Single-select"
        placeholder="Pick a country"
        options={countries}
        popover
        defaultValue="FR"
      />
      <FormKit
        type="dropdown"
        label="Truncate appearance"
        placeholder="Pick a country"
        options={countries}
        popover
        multiple
        defaultValue={['FR', 'GR', 'ES']}
      />
      <FormKit
        type="dropdown"
        label="Tags appearance"
        placeholder="Pick a country"
        options={countries}
        popover
        multiple
        selectionAppearance="tags"
        defaultValue={['FR', 'GR', 'ES']}
      />
    </>
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
