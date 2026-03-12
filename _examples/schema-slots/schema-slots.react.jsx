// %partial%
import { useEffect, useState } from 'react'
import { FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'h1',
    children: 'Fast click game',
    attrs: {
      class: 'text-2xl font-bold mb-4',
    },
  },
  {
    $formkit: 'button',
    onClick: '$handleClick',
    children: '$slots.default',
  },
  {
    $el: 'p',
    children: [
      {
        if: '$state === "won"',
        then: {
          $el: 'span',
          attrs: {
            style: { color: 'green' },
          },
          children: 'You won!!!!',
        },
        else: {
          if: '$state === "lost"',
          then: {
            $el: 'span',
            attrs: {
              style: { color: 'red' },
            },
            children: 'Sorry, you lost - try again!',
          },
          else: 'Try to click when the button reads between 500 and 600!',
        },
      },
    ],
  },
]

function Example() {
  const [state, setState] = useState('play')
  const [label, setLabel] = useState(0)

  function handleClick() {
    if (label >= 500 && label <= 600) {
      setState('won')
    } else {
      setState('lost')
    }
  }

  useEffect(() => {
    if (state !== 'play') return
    const timer = setTimeout(() => {
      setLabel((current) => (current >= 1000 ? 0 : current + 10))
    }, 10)
    return () => clearTimeout(timer)
  }, [label, state])

  useEffect(() => {
    if (state === 'play') return
    const timer = setTimeout(() => {
      setState('play')
    }, 2000)
    return () => clearTimeout(timer)
  }, [state])

  const data = {
    state,
    label,
    handleClick,
  }

  return (
    <FormKitSchema
      schema={schema}
      data={data}
      slots={{
        default: ({ label: slotLabel } = {}) => (
          <span style={{ width: '6em' }}>{slotLabel}</span>
        ),
      }}
    />
  )
}
// %partial%

export default function App() {
  return <Example />
}
