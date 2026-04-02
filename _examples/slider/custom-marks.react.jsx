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
      {/* %partial% */}
      <FormKit
        type="slider"
        label="I render custom marks"
        defaultValue={50}
        marks={[
          { at: 0, label: '0\u00B0C' },
          { at: 20, label: '20\u00B0C' },
          { at: 37, label: '37\u00B0C' },
          { at: 100, label: '100\u00B0C' },
        ]}
        markLabels
      />
      {/* %partial% */}
    </>
  )
}
