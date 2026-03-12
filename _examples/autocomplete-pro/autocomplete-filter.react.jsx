import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import countries from '../_data/countries.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
const customFilter = (option, search) =>
  option.label.toLowerCase().startsWith((search || '').toLowerCase())
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="autocomplete"
        name="autocomplete"
        label="Search for a country"
        options={countries}
        placeholder="Example: United States"
        popover
        filter={customFilter}
      />
      {/* %partial% */}
    </>
  )
}
