import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
function DropdownExample() {
  return (
    <div>
      <FormKit label="No options" options={[]} type="dropdown" popover />
      <FormKit
        label="No options, empty message set."
        options={[]}
        type="dropdown"
        popover
        emptyMessage="No options here!"
      />
    </div>
  )
}
// %partial%

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
