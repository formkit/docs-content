import { createRoot } from 'react-dom/client'
// %partial%
import { FormKit, FormKitProvider } from '@formkit/react'
import { changeLocale } from '@formkit/i18n'
import config from './formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      <button
        className="border-2 px-2 py-1 mb-4"
        onClick={() => changeLocale('zh')}
      >
        Set to Chinese
      </button>
      <FormKit
        type="text"
        validation="required|length:10"
        name="username"
        validationVisibility="live"
      />
    </FormKitProvider>
  )
}
// %partial%

createRoot(document.getElementById('app')).render(<App />)
