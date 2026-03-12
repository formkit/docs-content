import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import countries from '../_data/countries.js'

function DropdownExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="dropdown"
        label="Select a country"
        options={countries}
        behavior="overscroll"
        defaultValue="NP"
        placeholder="Select a country"
      />
      {/* %partial% */}
    </>
  )
}

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <DropdownExample />
}
