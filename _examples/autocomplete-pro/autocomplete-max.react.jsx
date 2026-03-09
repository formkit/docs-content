import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import countries from '../_data/countries.js'

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
        type="autocomplete"
        label="Autocomplete (option appearance) with max prop set to 2"
        options={countries}
        selectionAppearance="option"
        multiple
        popover
        max="2"
      />
      <FormKit
        type="autocomplete"
        label="Autocomplete (text-input appearance) with max prop set to 2"
        options={countries}
        selectionAppearance="text-input"
        multiple
        popover
        max="2"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
