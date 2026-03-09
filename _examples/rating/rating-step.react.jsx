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
        {({ value }) => (
          <>
            {/* %partial% */}
            <FormKit
              type="rating"
              step="0.5"
              name="ratingLaCasa"
              slots={{
                label: ({ classes }) => (
                  <label className={classes.label}>
                    Rate your stay at <em>La Casa Madrigal</em>
                  </label>
                ),
              }}
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
