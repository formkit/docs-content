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
              type="unit"
              unit="kilometer"
              name="distance"
              label="Distance in meters"
              defaultValue={100}
            />
            <FormKit
              type="unit"
              unit="celsius"
              name="temperature"
              label="Temperature in Celsius"
              defaultValue={100}
            />
            <FormKit
              type="unit"
              unit="nanosecond"
              name="time"
              label="Time in nanoseconds"
              defaultValue={100}
            />
            <FormKit
              type="unit"
              unit="fluid-ounce"
              name="volume"
              label="Volume in fluid ounces"
              defaultValue={100}
            />
            <FormKit
              type="unit"
              unit="megabyte"
              name="digital-unit"
              label="Digital unit in megabytes"
              defaultValue={100}
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
            {/* %partial% */}
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
