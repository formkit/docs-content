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
        name="promo_code"
        mask="zzz-#### ####"
        tokens={{
          z: {
            type: 'char',
            token: 'z',
            pattern: /[A-Za-z0-9]/,
            placeholder: '_',
            selectDirection: 'left',
          },
        }}
        defaultValue="a6d-7789 4398"
        label="Promo code"
        help="Enter a promo code in the format: fkt-1234 5678"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
