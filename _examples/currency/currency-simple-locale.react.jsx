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
        {({ value }) => (
          <>
            {/* %partial% */}
            <FormKit
              type="currency"
              currency="USD"
              displayLocale="en"
              name="usd"
              defaultValue={12345678.9}
            />

            <FormKit
              type="currency"
              currency="EUR"
              displayLocale="de"
              name="eur"
              defaultValue={12345678.9}
            />

            <FormKit
              type="currency"
              currency="INR"
              displayLocale="en-IN"
              name="inr"
              defaultValue={12345678.9}
            />

            <FormKit
              type="currency"
              currency="CNY"
              displayLocale="zh-CN"
              name="cny"
              defaultValue={12345678.9}
            />
            {/* %partial% */}
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
