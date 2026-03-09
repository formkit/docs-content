import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

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
        type="mask"
        name="phone"
        mask="+1 (###) ###-####"
        label="Phone number"
        help="Please enter a phone number"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
