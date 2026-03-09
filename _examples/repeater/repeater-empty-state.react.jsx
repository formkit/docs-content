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
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            <FormKit
              id="repeater"
              name="users"
              type="repeater"
              label="Users"
              min={0}
              slots={{
                empty: () => (
                  <h2 className="text-xl font-bold mb-4">
                    Please add a user to get started.
                  </h2>
                ),
              }}
            >
              <FormKit
                type="email"
                label="Email"
                name="email"
                validation="required|email"
              />
            </FormKit>
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
