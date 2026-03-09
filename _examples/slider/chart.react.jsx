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
      <FormKit
        type="slider"
        label="I render a bar chart above my track"
        defaultValue={30}
        chart={[
          { at: 0, value: 10 },
          { at: 10, value: 15 },
          { at: 20, value: 20 },
          { at: 30, value: 25 },
          { at: 40, value: 30 },
          { at: 50, value: 35 },
          { at: 60, value: 30 },
          { at: 70, value: 25 },
          { at: 80, value: 15 },
          { at: 90, value: 5 },
        ]}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
