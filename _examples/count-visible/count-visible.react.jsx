import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { useEffect, useState } from 'react'
import { FormKit } from '@formkit/react'

function CountVisibleExample() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [inputNode, setInputNode] = useState()

  useEffect(() => {
    if (!inputNode) return

    inputNode.ledger.count('visible', (message) => message.visible)
    setVisibleCount(inputNode.ledger.value('visible'))

    const receipt = inputNode.on('count:visible', ({ payload: count }) => {
      setVisibleCount(count)
    })

    return () => {
      inputNode.off(receipt)
    }
  }, [inputNode])

  return (
    <>
      <FormKit
        label="Count some errors"
        validation="required|is:foo,baz|*length:3,3"
        validationVisibility="live"
        onNode={setInputNode}
      />
      Visible: {visibleCount} messages
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CountVisibleExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
