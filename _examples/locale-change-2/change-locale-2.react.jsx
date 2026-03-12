// %partial%
import { FormKit } from '@formkit/react'
import { changeLocale } from '@formkit/i18n'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  return (
    <>
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
    </>
  )
}
// %partial%
