import { createRoot } from 'react-dom/client'
// %partial%
import { useMemo, useState } from 'react'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import baseConfig from './formkit.config.react.jsx'

function App() {
  const [current, setCurrent] = useState('en')
  const config = useMemo(
    () =>
      defaultConfig({
        ...baseConfig(),
        locale: current,
      }),
    [current]
  )

  const changeLocale = () => {
    setCurrent((locale) => (locale === 'en' ? 'de' : 'en'))
  }

  return (
    <FormKitProvider config={config}>
      <a onClick={(event) => {
        event.preventDefault()
        changeLocale()
      }} href="#">
        {current === 'en' ? (
          <span>DE config.locale = 'de'</span>
        ) : (
          <span>US config.locale = 'en'</span>
        )}
      </a>
      <FormKit type="form" onSubmit={() => false}>
        <FormKit
          type="email"
          label="Email"
          placeholder="email@example.com"
          validation="required|email"
        />
      </FormKit>
      <small>
        Note: this example does not contain a full german locale, only the
        messages required for this example (submit, required, email).
      </small>
    </FormKitProvider>
  )
}
// %partial%

createRoot(document.getElementById('app')).render(<App />)
