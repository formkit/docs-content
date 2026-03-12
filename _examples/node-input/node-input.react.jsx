/* %partial% */
import { useEffect } from 'react'
import { FormKit, useFormKitNodeById } from '@formkit/react'
/* %partial% */

/* %partial% */
function NodeInputExample() {
  const node = useFormKitNodeById('coffee')

  useEffect(() => {
    if (!node) return
    let index = 0
    const coffee = ['Latte', 'Americano', 'Doppio', 'Allonge', 'Macchiato']
    const interval = setInterval(() => {
      node.input(coffee[index])
      if (index < coffee.length - 1) index++
      else index = 0
    }, 250)
    return () => clearInterval(interval)
  }, [node])

  return (
    <FormKit
      label="Favorite type of coffee type?"
      id="coffee"
      help="What is your favorite type of coffee?"
    />
  )
}
/* %partial% */

export default function App() {
  return <NodeInputExample />
}
