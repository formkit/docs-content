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

export default function App() {
  return <CountVisibleExample />
}
