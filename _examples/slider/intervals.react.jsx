import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
const intervals = [
  { value: 0, step: 10 },
  { value: 100, step: 50 },
  { value: 800, step: 100 },
]

const marks = [
  { at: 0, label: '0' },
  { at: 100, label: '100' },
  { at: 800, label: '800' },
  { at: 3000, label: '3000' },
]
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="slider"
        label="Scaling: Interval"
        defaultValue={100}
        intervals={intervals}
        marks={marks}
        markLabels
        min={0}
        max={3000}
      />
      {/* %partial% */}
    </>
  )
}
