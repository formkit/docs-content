import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { customQuad, customSine } from './scaling-utils.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

const scalingMarks = [
  { at: 0, label: '0' },
  { at: 25, label: '25' },
  { at: 50, label: '50' },
  { at: 75, label: '75' },
  { at: 100, label: '100' },
]

const sharedProps = {
  step: 0.01,
  marks: scalingMarks,
  markLabels: true,
  tooltipFormat: (value) =>
    value.toLocaleString('en-US', { minimumFractionDigits: 2 }),
  delay: 0,
}

function App() {
  const [scalingValue, setScalingValue] = useState([25, 75])

  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        modelValue={scalingValue}
        onUpdateModelValue={setScalingValue}
        type="slider"
        label="Scaling: Linear"
        scalingFunction="linear"
        {...sharedProps}
      />
      <FormKit
        modelValue={scalingValue}
        onUpdateModelValue={setScalingValue}
        type="slider"
        label="Scaling: Logarithmic"
        scalingFunction="log"
        {...sharedProps}
      />
      <FormKit
        modelValue={scalingValue}
        onUpdateModelValue={setScalingValue}
        type="slider"
        label="Scaling: Custom Quadratic"
        scalingFunction={customQuad}
        {...sharedProps}
      />
      <FormKit
        modelValue={scalingValue}
        onUpdateModelValue={setScalingValue}
        type="slider"
        label="Scaling: Custom Sine Wave"
        scalingFunction={customSine}
        {...sharedProps}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
