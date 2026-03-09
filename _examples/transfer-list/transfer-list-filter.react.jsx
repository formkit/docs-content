import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { guests } from './guests.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
const customFilter = (option, search) =>
  option.label.toLowerCase().startsWith((search || '').toLowerCase())
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="form"
        value={{
          vips: ['Monica Baker', 'Marion Blanchard'],
        }}
        actions={false}
      >
        {({ value }) => (
          <>
            <FormKit
              name="vips"
              type="transferlist"
              label="Choose VIPs for the party"
              sourceLabel="Guests"
              targetLabel="VIPs"
              sourceEmptyMessage="No guests found"
              targetEmptyMessage="No VIPs selected"
              options={guests}
              searchable
              placeholder="Search guests"
              filter={customFilter}
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
