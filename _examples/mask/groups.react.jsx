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
      <>
        {/* %partial% */}
        <FormKit
          type="mask"
          name="school_id"
          mask="id{-a#a|repeat|placeholder:+}"
          label="Id number"
          help="Id number in the format: id-b4b-b4b-b4b-b4b"
        />

        {/* "-a#a" is the group, "repeat" and "placeholder" are the options */}
        {/* %partial% */}
      </>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
