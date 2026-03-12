// %partial%
import { useEffect, useState } from 'react'
import { FormKit, changeLocale } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

const styles = `
  .locale-switch {
    display: inline-block;
    margin-bottom: 2em;
  }

  .locale-note {
    display: block;
    margin-top: 1em;
    color: SlateGray;
  }
`

export default function App() {
  const [current, setCurrent] = useState('en')

  useEffect(() => {
    changeLocale(current)

    return () => {
      changeLocale('en')
    }
  }, [current])

  const toggleLocale = () => {
    setCurrent((locale) => (locale === 'en' ? 'de' : 'en'))
  }

  return (
    <>
      <style>{styles}</style>
      <a
        className="locale-switch"
        onClick={(event) => {
          event.preventDefault()
          toggleLocale()
        }}
        href="#"
      >
        {current === 'en' ? (
          <span>🇩🇪 config.locale = 'de'</span>
        ) : (
          <span>🇺🇸 config.locale = 'en'</span>
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
      <small className="locale-note">
        Note: this example does not contain a full german locale, only the
        messages required for this example (submit, required, email).
      </small>
    </>
  )
}
// %partial%
