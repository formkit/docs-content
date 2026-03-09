import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { useCallback } from 'react'
import { FormKit } from '@formkit/react'

function NodeEventExample() {
  const setNode = useCallback((node) => {
    node.input('Much node!')
  }, [])

  return <FormKit type="text" onNode={setNode} />
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NodeEventExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
