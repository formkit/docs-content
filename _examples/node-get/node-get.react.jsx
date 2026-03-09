import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { getNode } from '@formkit/core'
import { useEffect } from 'react'
import { FormKit } from '@formkit/react'

function NodeGetExample() {
  useEffect(() => {
    const node = getNode('manufacturer')
    node?.input('Samsung', false)
  }, [])

  return (
    <FormKit
      type="select"
      id="manufacturer"
      label="Manufacturer"
      options={['Sony', 'Apple', 'Samsung', 'Lenovo']}
      help="Select your favorite tech manufacturer."
    />
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NodeGetExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
