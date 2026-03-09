import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import countries from '../_data/countries.js'

function DropdownExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="dropdown"
        label="Select a country"
        options={countries}
        behavior="overscroll"
        defaultValue="NP"
        placeholder="Select a country"
      />
      {/* %partial% */}
    </>
  )
}

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <DropdownExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
