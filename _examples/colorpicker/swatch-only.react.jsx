import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const swatches = [
  '#000000',
  'hsla(180, 100%, 0%, 0.5)',
  'hsla(352, 98%, 41%, 1)',
  'rgb(245, 166, 35)',
  'hsl(55deg, 94%, 54.1%)',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#B955CB',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
  'hsla(220, 30%, 100%, 0.5)',
  'rgba(233,22,155,0.5)',
  'hsla(50deg,85.5%,83.7%,0.5)',
]

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="colorpicker"
        label="Swatch-only in inline mode"
        defaultValue="#CF021D"
        inline
        options={swatches}
        panelControls={false}
        panelFormat={false}
      />

      <FormKit
        type="colorpicker"
        label="Swatch-only in pop-over mode"
        defaultValue="#B955CB"
        options={swatches}
        panelControls={false}
        panelFormat={false}
        popover
        closeOnSelect
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
