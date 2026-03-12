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
    <>
      <br />
      {/* %partial% */}
      <FormKit
        label="Primary Label"
        type="toggle"
        labelPosition="secondary"
        offValueLabel="OFF"
        onValueLabel="ON"
        valueLabelDisplay="inner"
      />
      {/* %partial% */}
    </>
  )
}
