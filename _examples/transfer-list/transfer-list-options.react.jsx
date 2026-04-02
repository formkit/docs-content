import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { guests } from './guests.js'

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
        type="transferlist"
        label="Choose VIPs for the party"
        sourceLabel="Guests"
        targetLabel="VIPs"
        sourceEmptyMessage="No guests found"
        targetEmptyMessage="No VIPs selected"
        options={guests}
      />
      {/* %partial% */}
    </>
  )
}
