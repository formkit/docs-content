import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import countries from '../_data/countries.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="autocomplete"
        label="Single-select text input"
        placeholder="Pick a country"
        options={countries}
        popover
        defaultValue="FR"
      />
      <FormKit
        type="autocomplete"
        label="Single-select option"
        placeholder="Pick a country"
        options={countries}
        popover
        selectionAppearance="option"
        defaultValue="FR"
      />
      <FormKit
        type="autocomplete"
        label="Multiple text input"
        placeholder="Pick a country"
        options={countries}
        popover
        multiple
        defaultValue={['FR', 'GR', 'ES']}
      />
      <FormKit
        type="autocomplete"
        label="Multiple option"
        placeholder="Pick a country"
        options={countries}
        multiple
        selectionAppearance="option"
        defaultValue={['FR', 'GR', 'ES']}
      />
      {/* %partial% */}
    </>
  )
}
