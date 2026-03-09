import { createRoot } from 'react-dom/client'
import { FormKitProvider } from '@formkit/react'
/* %partial% */
import { FormKit, FormKitIcon } from '@formkit/react'
import config from './formkit.config.react.jsx'

function FontAwesomeIconsExample() {
  return (
    <>
      <div style={{ display: 'none' }}>
        <style>
          {
            '.font-awesome-icons .formkit-inner svg, .font-awesome-icons .formkit-icon svg { fill: currentColor; }'
          }
        </style>
      </div>
      <div className="font-awesome-icons">
        <FormKit
          label="I'm using FontAwesome icons"
          prefixIcon="atom"
          suffixIcon="lightbulb"
          innerClass="[&_svg]:fill-current"
        />
        <FormKit
          type="select"
          label="Custom loaders work with all icon props"
          selectIcon="circle-arrow-down"
          options={['One', 'Two', 'Three']}
          help="I'm a select with a custom select icon"
          innerClass="[&_svg]:fill-current"
        />
        <h2 className="text-xl font-bold mb-4">
          Also works with standalone icons
        </h2>
        <div
          className="w-32 text-slate-800 dark:text-slate-300"
          style={{ maxWidth: '8rem' }}
        >
          <FormKitIcon icon="jedi" />
        </div>
      </div>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={config}>
      <FontAwesomeIconsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
