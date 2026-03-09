import { createRoot } from 'react-dom/client'
import { FormKitProvider } from '@formkit/react'
/* %partial% */
import { FormKit, FormKitIcon } from '@formkit/react'
import config from './formkit.config.react.jsx'

function HeroiconsExample() {
  return (
    <>
      <FormKit
        label="I'm using Heroicons icons"
        prefixIcon="variable"
        suffixIcon="trash"
      />
      <FormKit
        type="select"
        label="Custom loaders work with all icon props"
        selectIcon="selector"
        options={['One', 'Two', 'Three']}
        help="I'm a select with a custom select icon"
      />
      <h2 className="text-xl font-bold mb-4">
        Also works with standalone icons
      </h2>
      <div
        className="w-32 text-slate-800 dark:text-slate-300"
        style={{ maxWidth: '8rem' }}
      >
        <FormKitIcon icon="qrcode" />
      </div>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={config}>
      <HeroiconsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
