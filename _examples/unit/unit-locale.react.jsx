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
          name="input_1"
          unitDisplay="long"
          displayLocale="en-US"
          defaultValue={100}
        />
        <FormKit
          type="unit"
          unit="kilogram"
          name="input_2"
          unitDisplay="long"
          displayLocale="de-DE"
          defaultValue={100}
        />
        <FormKit
          type="unit"
          unit="kilogram"
          name="input_3"
          unitDisplay="long"
          displayLocale="zh-CN"
          defaultValue={100}
        />
        {/* %partial% */}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
