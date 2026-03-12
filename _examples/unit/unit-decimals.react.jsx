import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: {
    ...genesisIcons,
  },
})

export default function App() {
  return (
    <FormKit type="form" actions={false}>
      {/* %partial% */}
      <FormKit
        type="unit"
        unit="liter"
        name="input_1"
        label="5 decimals allowed"
        decimals={5}
        defaultValue={100}
      />
      <FormKit
        type="unit"
        unit="liter"
        name="input_2"
        label="Minimum of 2 decimals"
        minDecimals={2}
        defaultValue={100}
      />
      {/* %partial% */}
    </FormKit>
  )
}
