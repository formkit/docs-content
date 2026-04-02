import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="group">
        <FormKit
          id="no-model"
          type="repeater"
          label="Ice cream orders"
          help="Add as many ice cream orders as you want."
          insertControl
        >
          <FormKit name="name" label="Person this order is for" />
          <FormKit
            type="radio"
            label="Flavors"
            options={['Vanilla', 'Chocolate', 'Strawberry']}
          />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </>
  )
}
