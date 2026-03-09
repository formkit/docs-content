import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
function disableEvenMonths(_node, date) {
  return date.getMonth() % 2 !== 0
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="datepicker"
        name="pickup"
        label="Next date"
        placeholder="Select a day"
        help="Use the keyboard to advance past an entire disabled month."
        maxScan={32}
        pickerOnly
        popover
        disabledDays={disableEvenMonths}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
