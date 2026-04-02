import { useState } from 'react'

export { default as formkitConfig } from './formkit.config.react.jsx'
/* %partial% */
import { FormKit, createInput } from '@formkit/react'

const sum = createInput(
  [
    {
      $el: 'input',
      attrs: {
        class: '$classes.addend',
        type: 'number',
        onInput: '$handlers.numberA',
      },
    },
    '+',
    {
      $el: 'input',
      attrs: {
        class: '$classes.addend',
        type: 'number',
        onInput: '$handlers.numberB',
      },
    },
    '= ',
    '$_value || 0',
  ],
  {
    features: [addHandlers],
    family: 'text',
  }
)

function addHandlers(node) {
  let numberA = 0
  let numberB = 0

  node.on('created', () => {
    node.context.handlers.numberA = (event) => {
      numberA = Number(event.target.value)
      node.input(numberA + numberB)
    }

    node.context.handlers.numberB = (event) => {
      numberB = Number(event.target.value)
      node.input(numberA + numberB)
    }
  })
}

function CustomSumExample() {
  const [groupValues, setGroupValues] = useState({})

  return (
    <>
      <FormKit
        type="group"
        modelValue={groupValues}
        onUpdateModelValue={(value) => setGroupValues(value ?? {})}
      >
        <p className="mb-4">
          To illustrate the final value of this input, let&apos;s stick it in a
          group.
        </p>
        <FormKit
          type={sum}
          name="mySum"
          label="Sum 2 numbers"
          help="Enter two numbers above and their values will be summed!"
        />
      </FormKit>
      <pre>{JSON.stringify(groupValues, null, 2)}</pre>
    </>
  )
}
/* %partial% */

export default function App() {
  return <CustomSumExample />
}
