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
      <>
        {/* %partial% */}
        <FormKit
          type="mask"
          mask="###-###-####"
          defaultValue="123-456-7890"
          label="(Shift mode) Social security number"
          help="Notice when you type new numbers the characters shift to the right."
        />
        <FormKit
          type="mask"
          mode="replace"
          mask="###-###-####"
          defaultValue="123-456-7890"
          label="(Replace mode) Social security number"
          help="Notice when you type new numbers the characters are replaced."
        />
        {/* %partial% */}
      </>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
