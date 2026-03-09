import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKitIcon } from '@formkit/react'

function IconComponentExample() {
  return (
    <>
      <h2>
        Using <code>FormKitIcon</code> you can output any loaded icon anywhere.
      </h2>
      <div style={{ maxWidth: '5em' }}>
        <FormKitIcon icon="heart" />
      </div>
    </>
  )
}
/* %partial% */

const config = defaultConfig({
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <IconComponentExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
