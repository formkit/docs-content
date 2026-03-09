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
      <FormKit
        type="form"
        actions={false}
        value={{ users: [{ email: 'justin@formkit.com ' }] }}
      >
        {({ value }) => (
          <>
            {/* %partial% */}
            <FormKit
              id="repeater"
              name="users"
              type="repeater"
              label="Users"
              draggable
            >
              {({ index }) => (
                <FormKit
                  type="email"
                  label={`${index + 1}. Email`}
                  name="email"
                  validation="required|email"
                  placeholder="Add email address..."
                />
              )}
            </FormKit>
            {/* %partial% */}
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
