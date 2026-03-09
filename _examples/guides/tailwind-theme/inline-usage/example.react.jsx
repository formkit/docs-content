import { createRoot } from 'react-dom/client'
import { FormKitProvider } from '@formkit/react'
import config from '../../../_no-tailwind/formkit.config.react.jsx'
/* %partial% */
import { FormKit } from '@formkit/react'

function TailwindThemeInlineUsageExample() {
  return (
    <>
      {/* using section-key class props */}
      <FormKit
        type="text"
        label="Section-key class props"
        help="Look, Ma! Tailwind styles"
        outerClass="mb-5"
        labelClass="mb-1 block text-sm font-bold"
        innerClass="mb-1 max-w-md overflow-hidden rounded-lg border border-gray-400 focus-within:border-blue-500"
        inputClass="h-10 w-full border-none px-3 text-base text-gray-700 placeholder-gray-400"
        helpClass="text-xs text-gray-500"
      />
      {/* using the classes prop */}
      <FormKit
        type="text"
        label="Classes prop"
        help="Look, Ma! Tailwind styles"
        classes={{
          outer: 'mb-5',
          label: 'mb-1 block text-sm font-bold',
          inner:
            'mb-1 max-w-md overflow-hidden rounded-lg border border-gray-400 focus-within:border-blue-500',
          input:
            'h-10 w-full border-none px-3 text-base text-gray-700 placeholder-gray-400',
          help: 'text-xs text-gray-500',
        }}
      />
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={config}>
      <TailwindThemeInlineUsageExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
