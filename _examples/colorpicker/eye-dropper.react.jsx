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
  const hasNativeEyeDropper =
    typeof window !== 'undefined' && 'EyeDropper' in window

  return (
    <FormKitProvider config={config}>
      {!hasNativeEyeDropper ? (
        <h2>Your browser does not support the Eyedropper API.</h2>
      ) : null}

      {/* %partial% */}
      <FormKit
        type="colorpicker"
        label="Eyedropper enabled (default, when available)"
        inline
        defaultValue="#B955CB"
      />

      <FormKit
        type="colorpicker"
        label="Eyedropper disabled"
        inline
        eyeDropper={false}
        defaultValue="#B955CB"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
