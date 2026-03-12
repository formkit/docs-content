import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
/* %partial% */
import { FormKit, useFormKitNodeById } from '@formkit/react'

function UseFormKitNodeByIdExample() {
  useFormKitNodeById('student_id', (node) => {
    node.input('edu-445-1232')
  })

  return (
    <FormKit type="form" onSubmit={() => false}>
      <FormKit
        id="student_id"
        type="mask"
        mask="edu-###-####"
        name="student_id"
        validation="required"
      />
    </FormKit>
  )
}
/* %partial% */

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <UseFormKitNodeByIdExample />
}
