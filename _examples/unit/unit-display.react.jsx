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
          unit="kilogram"
          name="narrow"
          unitDisplay="narrow"
          label="Narrow"
          defaultValue={100}
        />
        <FormKit
          type="unit"
          unit="kilogram"
          name="short"
          unitDisplay="short"
          label="Short"
          defaultValue={100}
        />
        <FormKit
          type="unit"
          unit="kilogram"
          name="long"
          unitDisplay="long"
          label="Long"
          defaultValue={100}
        />
        {/* %partial% */}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
