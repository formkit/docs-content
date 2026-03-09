import { createRoot } from 'react-dom/client'
import {
  FormKit,
  FormKitProvider,
  FormKitSchema,
  defaultConfig,
} from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
const schema = [
  {
    $formkit: 'repeater',
    name: 'users',
    children: [
      {
        $formkit: 'text',
        name: 'email',
        label: '$: ($index + 1) + ". Email"',
        validation: 'required|email',
      },
    ],
  },
]
// %partial%

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
            <FormKitSchema schema={schema} library={{ FormKit }} />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
