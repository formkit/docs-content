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

export default function App() {
  return <NodeEventExample />
}
