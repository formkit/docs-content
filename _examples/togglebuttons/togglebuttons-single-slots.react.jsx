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
      <FormKit type="form" actions={false}>
        {/* %partial% */}
        <FormKit type="togglebuttons">Airplane mode</FormKit>

        <FormKit
          type="togglebuttons"
          slots={{
            on: () => (
              <>
                <span className="text-xl">&#9745;</span> Enabled
              </>
            ),
            off: () => (
              <>
                <span className="text-xl">&#9744;</span> Disabled
              </>
            ),
          }}
        />
        {/* %partial% */}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
