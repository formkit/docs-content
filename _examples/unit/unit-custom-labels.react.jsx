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
        name="load"
        label="Load"
        unit="ton"
        unitLabels={{ short: 't', long: { one: 'ton', other: 'tons' } }}
        defaultValue={12.5}
      />
      <FormKit
        type="unit"
        name="trucks"
        label="Trucks"
        unit="truck"
        unitDisplay="long"
        decimals={0}
        unitLabels={{ long: { one: 'truck', other: 'trucks' } }}
        defaultValue={3}
      />
      {/* %partial% */}
    </FormKit>
  )
}
