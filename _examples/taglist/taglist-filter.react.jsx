import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
import countries from '../_data/countries.js'

const filterCountries = (option, search) =>
  option.label.toLowerCase().startsWith(search.toLowerCase())

function TaglistExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          <FormKit
            type="taglist"
            name="taglist"
            label="Search for a country"
            popover
            options={countries}
            defaultValue={['AX', 'AL']}
            filter={filterCountries}
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
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
      <TaglistExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
