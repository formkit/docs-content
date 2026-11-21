// %partial%
import { useState } from 'react'
import { FormKitSchema } from '@formkit/react'

// React has no slots — named schema slots arrive as render-function props
// of the same name. The default slot arrives as children.
function Card({ header, footer, children }) {
  const [likes, setLikes] = useState(0)
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 6, padding: '1em' }}>
      <header>{header?.({ title: 'Schema cards', likes })}</header>
      <main>{children}</main>
      <footer>
        <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
        {footer?.({ likes })}
      </footer>
    </div>
  )
}

const library = { Card }

const data = { author: 'Jane' }

const schema = [
  {
    $cmp: 'Card',
    // The default slot (children works too)
    children: [{ $el: 'p', children: 'Named slots work just like children.' }],
    slots: {
      // $title comes from the render-prop argument, $author from the schema data
      header: [{ $el: 'h3', children: '$: $title + " by " + $author' }],
      // Slot content can be a string, expression, array, or conditional
      footer: {
        if: '$likes > 0',
        then: '$: " " + $likes + " like(s)"',
        else: ' No likes yet',
      },
    },
  },
]

function Example() {
  return <FormKitSchema schema={schema} data={data} library={library} />
}
// %partial%

export default function App() {
  return <Example />
}
