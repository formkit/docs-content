import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
const flavors = ['Chocolate', 'Vanilla', 'Strawberry']

function TaglistExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          <FormKit
            type="taglist"
            name="flavors"
            label="Select or add a flavor"
            popover
            options={flavors}
            defaultValue={['Chocolate', 'Vanilla']}
            allowNewValues
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
