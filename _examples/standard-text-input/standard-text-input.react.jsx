import { useState } from 'react'

/* %partial% */
import { FormKit } from '@formkit/react'

const simpleText = {
  type: 'input',
  schema: [
    {
      $el: 'input',
      attrs: {
        onInput: '$handlers.DOMInput',
        value: '$_value',
        class: 'border border-gray-900 bg-transparent dark:border-gray-500',
      },
    },
  ],
}

function StandardTextInputExample() {
  const [groupValues, setGroupValues] = useState({})

  return (
    <>
      <FormKit
        type="group"
        modelValue={groupValues}
        onUpdateModelValue={(value) => setGroupValues(value ?? {})}
      >
        <FormKit type={simpleText} name="simple" />
      </FormKit>
      <pre>{JSON.stringify(groupValues, null, 2)}</pre>
    </>
  )
}
/* %partial% */

export default function App() {
  return <StandardTextInputExample />
}
