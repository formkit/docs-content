import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: {
    ...genesisIcons,
  },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <FormKit type="form" actions={false}>
        {/* %partial% */}
        <FormKit
          type="unit"
          unit="millisecond"
          name="input_1"
          label="Min of 100"
          min={100}
          defaultValue={100}
        />
        <FormKit
          type="unit"
          unit="millisecond"
          name="input_2"
          label="Max of 100"
          max={100}
          defaultValue={0}
        />
        {/* %partial% */}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
