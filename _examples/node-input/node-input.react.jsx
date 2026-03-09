import { createRoot } from 'react-dom/client'
/* %partial% */
import { useEffect } from 'react'
import { getNode } from '@formkit/core'
import { FormKit } from '@formkit/react'
/* %partial% */
import { FormKitProvider, defaultConfig } from '@formkit/react'

/* %partial% */
function NodeInputExample() {
  useEffect(() => {
    const node = getNode('coffee')
    if (!node) return
    let index = 0
    const coffee = ['Latte', 'Americano', 'Doppio', 'Allonge', 'Macchiato']
    const interval = setInterval(() => {
      node.input(coffee[index])
      if (index < coffee.length - 1) index++
      else index = 0
    }, 250)
    return () => clearInterval(interval)
  }, [])

  return (
    <FormKit
      label="Favorite type of coffee type?"
      id="coffee"
      help="What is your favorite type of coffee?"
    />
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <NodeInputExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
