import { createRoot } from 'react-dom/client'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const chartData = Array(100)
  .fill(0)
  .map((_, index) => ({
    at: index * 20,
    value: Math.random() * 100 + index * 2,
  }))

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro, createFloatingLabelsPlugin()],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="slider"
        label="Choose your price range"
        defaultValue={[800, 1200]}
        tooltipFormat={(value) => `$${value}`}
        tooltip={true}
        min={0}
        max={2000}
        showInput
        step={25}
        inputAttrs={{
          floatingLabel: true,
          prefixIcon: 'dollar',
        }}
        minInputAttrs={{
          label: 'Minimum',
        }}
        maxInputAttrs={{
          label: 'Maximum',
        }}
        marks={[
          { at: 0, label: '$0' },
          { at: 500, label: '$500' },
          { at: 1000, label: '$1000' },
          { at: 1500, label: '$1500' },
          { at: 2000, label: '$2000' },
        ]}
        markLabels
        chart={chartData}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
